const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const initialPort = 5002; 

const dbPath = './bancodedado.db';

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados SQLite');
    
    
    db.run(`
      CREATE TABLE IF NOT EXISTS materias (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        descricao TEXT
      )
    `, (err) => {
      if (err) {
        console.error('Erro ao criar a tabela "materias":', err);
      } else {
        console.log('Tabela "materias" criada ou já existe.');
        
        // Inserindo dados na tabela
        db.run(`INSERT INTO materias (nome, descricao) VALUES (?, ?)`, ["Matemática", "Estudo dos números e suas operações"], (err) => {
          if (err) {
            console.error('Erro ao inserir dados na tabela "materias":', err);
          } else {
            console.log('Dados inseridos na tabela "materias" com sucesso.');
          }
        });
      }
    });
  }
});

function startServer(port) {
  app.listen(port, (err) => {
    if (err) {
      console.error(`Erro ao tentar iniciar o servidor na porta ${port}:`, err);
      startServer(port + 1); // Tenta a próxima porta
    } else {
      console.log(`Servidor rodando em http://localhost:${port}`);
    }
  });
}

startServer(initialPort + 1); 