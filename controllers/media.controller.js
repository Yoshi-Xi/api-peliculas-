const Media = require('../models/media.model');

exports.crear = async (req, res) => {
  try {
    const media = new Media(req.body);
    const guardado = await media.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.obtenerTodos = async (req, res) => {
  try {
    const media = await Media.find().populate('genero director productora tipo');
    res.json(media);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.obtenerUno = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id).populate('genero director productora tipo');
    if (!media) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json(media);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.actualizar = async (req, res) => {
  try {
    const media = await Media.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!media) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json(media);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const media = await Media.findByIdAndDelete(req.params.id);
    if (!media) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json({ mensaje: 'Eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};