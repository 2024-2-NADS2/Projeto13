const sqlite3 = require('sqlite3').verbose();

const dbPath = './bancodedado.db';

function buscaUsuario(email, callback) {
  const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      callback(err, null);
      return;
    }
  });

  db.get('SELECT * FROM usuarios WHERE email = ?', [email], (err, usuario) => {
    if (err) {
      console.error('Erro ao buscar usuário:', err);
      callback(err, null);
      return;
    }

    callback(null, usuario);
  });

  // Fechar a conexão com o banco de dados
  db.close();
}

module.exports = buscaUsuario;


  