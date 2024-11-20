const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');

const db = new sqlite3.Database('./bancodedado.db');

function criarUsuario(email, senha, callback) {
  bcrypt.hash(senha, 10, (err, hashedPassword) => {
    if (err) return callback(err);

    db.run('INSERT INTO usuarios (email, senha) VALUES (?, ?)', [email, hashedPassword], function(err) {
      if (err) return callback(err);
      callback(null, { id: this.lastID, email });
    });
  });
}

function buscarUsuario(email, callback) {
  db.get('SELECT * FROM usuarios WHERE email = ?', [email], (err, row) => {
    if (err) return callback(err);
    callback(null, row);
  });
}

function atualizarUsuario(id, email, senha, callback) {
  bcrypt.hash(senha, 10, (err, hashedPassword) => {
    if (err) return callback(err);

    db.run('UPDATE usuarios SET email = ?, senha = ? WHERE id = ?', [email, hashedPassword, id], function(err) {
      if (err) return callback(err);
      callback(null, { id, email });
    });
  });
}

function excluirUsuario(id, callback) {
  db.run('DELETE FROM usuarios WHERE id = ?', [id], function(err) {
    if (err) return callback(err);
    callback(null, { id });
  });
}

module.exports = {
  criarUsuario,
  buscarUsuario,
  atualizarUsuario,
  excluirUsuario
};
