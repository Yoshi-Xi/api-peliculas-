const Productora = require('../models/productora.model');

exports.crear = async (req, res) => {
  try {
    if (!req.body.nombre) return res.status(400).json({ mensaje: 'El nombre es requerido' });
    const productora = new Productora(req.body);
    const guardado = await productora.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.obtenerTodos = async (req, res) => {
  try {
    const productoras = await Productora.find();
    res.json(productoras);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.obtenerUno = async (req, res) => {
  try {
    const productora = await Productora.findById(req.params.id);
    if (!productora) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json(productora);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.actualizar = async (req, res) => {
  try {
    const productora = await Productora.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!productora) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json(productora);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const productora = await Productora.findByIdAndDelete(req.params.id);
    if (!productora) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json({ mensaje: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};