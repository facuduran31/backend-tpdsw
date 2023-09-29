// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const encargadoRouter = require('./routers/encargadoRouter');

// Middlewares
app.use(express.json());
app.use(cors());

// Ruta raíz
app.get('/', (req, res) => {
  res.send("Corriendo servidor");
});

// Usar el enrutador de encargados
app.use('/api', encargadoRouter);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
