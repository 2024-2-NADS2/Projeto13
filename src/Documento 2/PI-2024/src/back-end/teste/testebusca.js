const buscaUsuario = require('../buscausuario');  

buscaUsuario('usuario@teste.com', (err, usuario) => {
  if (err) {
    console.error('Erro:', err);
  } else {
    if (usuario) {
      console.log('Usuário encontrado:', usuario);
    } else {
      console.log('Usuário não encontrado!');
    }
  }
});
