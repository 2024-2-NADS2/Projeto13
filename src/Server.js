const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 5000;

const dbPath = './bancodedado.db';
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados SQLite');

    db.run(`CREATE TABLE IF NOT EXISTS materias (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      descricao TEXT,
      professor TEXT
    )`, (err) => {
      if (err) {
        console.error('Erro ao criar tabela "materias":', err);
      } else {
        console.log('Tabela "materias" criada ou já existe.');
      }
    });

    db.run(`INSERT INTO materias (nome, descricao, professor) VALUES (?, ?, ?)`, 
    ['Matemática', 'Matéria de álgebra e cálculo', 'Prof. João'],
    function(err) {
      if (err) {
        console.error('Erro ao inserir dados na tabela "materias":', err);
      } else {
        console.log('Dados inseridos na tabela "materias".');
      }
    });
  }
});

app.get('/materias', (req, res) => {
  db.all("SELECT * FROM materias", (err, rows) => {
    if (err) {
      res.status(500).send("Erro ao acessar o banco de dados.");
    } else {
      res.json(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
