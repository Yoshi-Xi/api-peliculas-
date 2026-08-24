const mongoose = require('mongoose');

const generoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true, unique: true },
  estado: { type: String, enum: ['Activo', 'Inactivo'], default: 'Activo' },
  descripcion: { type: String, trim: true }
}, { timestamps: true });

module.exports = mongoose.model('Genero', generoSchema);