// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const maquinasvirtualesRouter = require('./routers/maquinasvirtualesRouter');
const computadorasRouter = require('./routers/computadorasRouter')

// Middlewares
app.use(express.json());
app.use(cors());

// Ruta raíz
app.get('/', (req, res) => {
  res.send("Corriendo servidor");
});

// Rutas
app.use('/api/', maquinasvirtualesRouter);
app.use('/api/', computadorasRouter);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
