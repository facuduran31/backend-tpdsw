// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
const routerMaquinasVirtuales = require('./routers/maquinasvirtuales.js')

// Ruta raíz
app.get('/', (req, res) => {
  res.send("Corriendo servidor");
});

// Ruta maquinas virtuales
app.use('/maquinasvirtuales', routerMaquinasVirtuales);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
