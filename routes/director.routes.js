const express = require('express');
const router = express.Router();
const directorController = require('../controllers/director.controller');

router.post('/directores', directorController.crear);
router.get('/directores', directorController.obtenerTodos);
router.get('/directores/:id', directorController.obtenerUno);
router.put('/directores/:id', directorController.actualizar);
router.delete('/directores/:id', directorController.eliminar);

module.exports = router;