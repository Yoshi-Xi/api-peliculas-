const express = require('express');
const router = express.Router();
const generoController = require('../controllers/genero.controller');

router.post('/generos', generoController.crear);
router.get('/generos', generoController.obtenerTodos);
router.get('/generos/:id', generoController.obtenerUno);
router.put('/generos/:id', generoController.actualizar);
router.delete('/generos/:id', generoController.eliminar);

module.exports = router;