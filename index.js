const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database.config');
require('dotenv').config();

const generoRoutes = require('./routes/genero.routes');
const directorRoutes = require('./routes/director.routes');
const productoraRoutes = require('./routes/productora.routes');
const tipoRoutes = require('./routes/tipo.routes');
const mediaRoutes = require('./routes/media.routes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', generoRoutes);
app.use('/api', directorRoutes);
app.use('/api', productoraRoutes);
app.use('/api', tipoRoutes);
app.use('/api', mediaRoutes);

app.get('/', (req, res) => {
  res.send('API de Pelis desarrollada, muchas gracias por su paciencia :)');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});