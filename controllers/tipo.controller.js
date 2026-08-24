const Tipo = require('../models/tipo.model');

exports.crear = async (req, res) => {
  try {
    if (!req.body.nombre) return res.status(400).json({ mensaje: 'El nombre es requerido' });
    const tipo = new Tipo(req.body);
    const guardado = await tipo.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.obtenerTodos = async (req, res) => {
  try {
    const tipos = await Tipo.find();
    res.json(tipos);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.obtenerUno = async (req, res) => {
  try {
    const tipo = await Tipo.findById(req.params.id);
    if (!tipo) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json(tipo);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.actualizar = async (req, res) => {
  try {
    const tipo = await Tipo.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!tipo) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json(tipo);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const tipo = await Tipo.findByIdAndDelete(req.params.id);
    if (!tipo) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json({ mensaje: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};