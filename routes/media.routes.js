const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/media.controller');

router.post('/media', mediaController.crear);
router.get('/media', mediaController.obtenerTodos);
router.get('/media/:id', mediaController.obtenerUno);
router.put('/media/:id', mediaController.actualizar);
router.delete('/media/:id', mediaController.eliminar);

module.exports = router;