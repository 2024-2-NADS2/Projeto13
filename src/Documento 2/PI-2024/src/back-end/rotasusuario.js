const express = require('express');
const router = express.Router();
const crudUsuario = require('./crudusuario');

router.post('/usuario', (req, res) => {
  const { email, senha } = req.body;
  crudUsuario.criarUsuario(email, senha, (err, usuario) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(usuario);
  });
});

router.get('/usuario/:email', (req, res) => {
  const { email } = req.params;
  crudUsuario.buscarUsuario(email, (err, usuario) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.status(200).json(usuario);
  });
});

router.put('/usuario/:id', (req, res) => {
  const { id } = req.params;
  const { email, senha } = req.body;
  crudUsuario.atualizarUsuario(id, email, senha, (err, usuario) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(usuario);
  });
});

router.delete('/usuario/:id', (req, res) => {
  const { id } = req.params;
  crudUsuario.excluirUsuario(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Usuário excluído', id: result.id });
  });
});

module.exports = router;
