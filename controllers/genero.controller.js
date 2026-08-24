const Genero = require('../models/genero.model');

exports.crear = async (req, res) => {
  try {
    if (!req.body.nombre) return res.status(400).json({ mensaje: 'El nombre es requerido' });
    const genero = new Genero(req.body);
    const guardado = await genero.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.obtenerTodos = async (req, res) => {
  try {
    const generos = await Genero.find();
    res.json(generos);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.obtenerUno = async (req, res) => {
  try {
    const genero = await Genero.findById(req.params.id);
    if (!genero) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json(genero);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.actualizar = async (req, res) => {
  try {
    const genero = await Genero.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!genero) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json(genero);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const genero = await Genero.findByIdAndDelete(req.params.id);
    if (!genero) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json({ mensaje: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};