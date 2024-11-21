const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const assert = require('assert');

const dbPath = './bancodedado.db';
const db = new sqlite3.Database(dbPath);

function buscaUsuario(email, senha, callback) {
  db.get('SELECT * FROM usuarios WHERE email = ?', [email], (err, row) => {
    if (err) {
      console.error('Erro na consulta:', err);
      return callback(err);
    }
    if (!row) {
      return callback(null, null); 
    }

    bcrypt.compare(senha, row.senha, (err, isMatch) => {
      if (err) {
        return callback(err);
      }
      if (!isMatch) {
        return callback(null, null); 
      }
      callback(null, row); 
    });
  });
}

const testeBusca = () => {
  const email = 'usuario@teste.com';
  const senha = 'testes'; 

  buscaUsuario(email, senha, (err, usuario) => {
    assert.strictEqual(err, null, 'Erro na consulta');
    assert.ok(usuario, 'Usuário não encontrado!');
    assert.strictEqual(usuario.email, email, `O email do usuário não corresponde. Esperado: ${email}, encontrado: ${usuario.email}`);

    console.log('Usuário encontrado:', usuario);
    db.close();
  });
};

testeBusca();
