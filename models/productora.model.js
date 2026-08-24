const mongoose = require('mongoose');

const productoraSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true, unique: true },
  estado: { type: String, enum: ['Activo', 'Inactivo'], default: 'Activo' },
  eslogan: { type: String, trim: true },
  descripcion: { type: String, trim: true }
}, { timestamps: true });

module.exports = mongoose.model('Productora', productoraSchema);