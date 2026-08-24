const Director = require('../models/director.model');

exports.crear = async (req, res) => {
  try {
    if (!req.body.nombres) return res.status(400).json({ mensaje: 'Los nombres son requeridos' });
    const director = new Director(req.body);
    const guardado = await director.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.obtenerTodos = async (req, res) => {
  try {
    const directores = await Director.find();
    res.json(directores);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.obtenerUno = async (req, res) => {
  try {
    const director = await Director.findById(req.params.id);
    if (!director) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json(director);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.actualizar = async (req, res) => {
  try {
    const director = await Director.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!director) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json(director);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const director = await Director.findByIdAndDelete(req.params.id);
    if (!director) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json({ mensaje: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};