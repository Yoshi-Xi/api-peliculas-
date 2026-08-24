const express = require('express');
const router = express.Router();
const productoraController = require('../controllers/productora.controller');

router.post('/productoras', productoraController.crear);
router.get('/productoras', productoraController.obtenerTodos);
router.get('/productoras/:id', productoraController.obtenerUno);
router.put('/productoras/:id', productoraController.actualizar);
router.delete('/productoras/:id', productoraController.eliminar);

module.exports = router;