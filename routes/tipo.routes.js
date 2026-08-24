const express = require('express');
const router = express.Router();
const tipoController = require('../controllers/tipo.controller');

router.post('/tipos', tipoController.crear);
router.get('/tipos', tipoController.obtenerTodos);
router.get('/tipos/:id', tipoController.obtenerUno);
router.put('/tipos/:id', tipoController.actualizar);
router.delete('/tipos/:id', tipoController.eliminar);

module.exports = router;