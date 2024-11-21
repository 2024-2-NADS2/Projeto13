const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const port = 5001;
require('dotenv').config();

// Caminho correto do banco de dados
const dbPath = './bancodedado.db';

// Configuração de CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Permitir apenas o frontend na porta 3000
  methods: ['GET', 'POST'],
};
app.use(cors(corsOptions));

// Middleware para parsear o corpo da requisição como JSON
app.use(express.json());

// Conectar ao banco de dados SQLite
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados SQLite');

    // Criar a tabela de usuários, caso não exista
    db.run(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL
      )
    `, (err) => {
      if (err) {
        console.error('Erro ao criar a tabela "usuarios":', err);
      } else {
        console.log('Tabela "usuarios" criada ou já existe.');
      }
    });
  }
});

// Middleware para verificar o token JWT
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'Token não fornecido' });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }
    req.user = decoded; // Dados do usuário decodificados
    next();
  });
};

// Endpoint para cadastrar um novo usuário
app.post('/api/usuarios', (req, res) => {
  const { email, senha } = req.body; // Removido nome, apenas email e senha

  // Validação simples dos dados
  if (!email || !senha) {
    return res.status(400).json({ error: "E-mail e senha são obrigatórios" });
  }

  // Criptografar a senha antes de salvar no banco de dados
  bcrypt.hash(senha, 10, (err, hashedSenha) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao criptografar a senha" });
    }

    // Inserir o novo usuário no banco de dados
    db.run(
      `INSERT INTO usuarios (email, senha) VALUES (?, ?)`,  // Removido campo 'nome'
      [email, hashedSenha], 
      function (err) {
        if (err) {
          return res.status(500).json({ error: err.message });
        } else {
          return res.status(201).json({
            message: "Usuário cadastrado com sucesso!",
            id: this.lastID,  // ID gerado automaticamente
            email
          });
        }
      }
    );
  });
});

// Endpoint para login
app.post('/api/login', (req, res) => {
  const { email, senha } = req.body;

  // Verifica se os campos estão preenchidos
  if (!email || !senha) {
    return res.status(400).json({ error: "E-mail e senha são obrigatórios" });
  }

  // Buscar usuário no banco de dados
  db.get('SELECT * FROM usuarios WHERE email = ?', [email], (err, usuario) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao acessar o banco de dados" });
    }

    if (!usuario) {
      return res.status(401).json({ error: "E-mail ou senha inválidos" });
    }

    // Verificar se a senha fornecida corresponde à senha no banco
    bcrypt.compare(senha, usuario.senha, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ error: "Erro ao verificar a senha" });
      }

      if (!isMatch) {
        return res.status(401).json({ error: "E-mail ou senha inválidos" });
      }

      // Gerar um token JWT para o usuário
      const token = jwt.sign({ id: usuario.id, email: usuario.email }, process.env.SECRET_KEY, { expiresIn: '1h' });

      // Enviar resposta com o token
      return res.json({ message: 'Login bem-sucedido', token });
    });
  });
});

// Endpoint para consultar todos os usuários
app.get('/api/usuarios', (req, res) => {
  db.all('SELECT * FROM usuarios', (err, usuarios) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao acessar os usuários" });
    }
    res.json(usuarios);
  });
});

// Endpoint para consultar um usuário por ID
app.get('/api/usuarios/:id', (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM usuarios WHERE id = ?', [id], (err, usuario) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao acessar o usuário" });
    }
    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    res.json(usuario);
  });
});

// Endpoint para atualizar um usuário
app.put('/api/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: "E-mail e senha são obrigatórios" });
  }

  bcrypt.hash(senha, 10, (err, hashedSenha) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao criptografar a senha" });
    }

    db.run(
      'UPDATE usuarios SET email = ?, senha = ? WHERE id = ?',
      [email, hashedSenha, id],
      function (err) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
          return res.status(404).json({ error: "Usuário não encontrado" });
        }
        res.json({ message: 'Usuário atualizado com sucesso!' });
      }
    );
  });
});

// Endpoint para deletar um usuário
app.delete('/api/usuarios/:id', (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM usuarios WHERE id = ?', [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    res.json({ message: 'Usuário deletado com sucesso!' });
  });
});

// Exemplo de rota protegida
app.get('/api/dashboard', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'Bem-vindo ao dashboard!', user: req.user });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
