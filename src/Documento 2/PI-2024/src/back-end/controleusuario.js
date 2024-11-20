const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const buscausuario = require('./buscausuario'); 

async function verificarSenha(usuario, senha) {
  return bcrypt.compare(senha, usuario.senha);
}

async function gerarToken(usuario) {
  return jwt.sign({ id: usuario.id, email: usuario.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
}

module.exports = { verificarSenha, gerarToken };
