// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const maquinasvirtualesRouter = require('./src/routers/maquinasvirtualesRouter');
const computadorasRouter = require('./src/routers/computadorasRouter');
const requerimientosRouter = require('./src/routers/requerimientosRouter');
const laboratoriosRouter = require('./src/routers/laboratoriosRouter');
const { routerLogin, verificarToken } = require('./src/routers/loginRouter');

// Middlewares
app.use(express.json());
app.use(cors());

// Ruta raíz
app.get('/', (req, res) => {
  res.send("Corriendo servidor");
});

// Rutas
app.use('/api/', verificarToken, maquinasvirtualesRouter);
app.use('/api/', verificarToken, computadorasRouter);
app.use('/api/', verificarToken, requerimientosRouter);
app.use('/api/', verificarToken, laboratoriosRouter);
app.use('/api/', routerLogin);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
