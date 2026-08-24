const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  serial: { type: String, required: true, unique: true, trim: true },
  titulo: { type: String, required: true, trim: true },
  sinopsis: { type: String, trim: true },
  url: { type: String, required: true, unique: true, trim: true },
  imagenPortada: { type: String, trim: true },
  añoEstreno: { type: Number, required: true },
  genero: { type: mongoose.Schema.Types.ObjectId, ref: 'Genero', required: true },
  director: { type: mongoose.Schema.Types.ObjectId, ref: 'Director', required: true },
  productora: { type: mongoose.Schema.Types.ObjectId, ref: 'Productora', required: true },
  tipo: { type: mongoose.Schema.Types.ObjectId, ref: 'Tipo', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Media', mediaSchema);