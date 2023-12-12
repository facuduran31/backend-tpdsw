// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const maquinasvirtualesRouter = require('./src/routers/maquinasvirtualesRouter');
const computadorasRouter = require('./src/routers/computadorasRouter');
const requerimientosRouter = require('./src/routers/requerimientosRouter');
const laboratoriosRouter = require('./src/routers/laboratoriosRouter');
const docentesRouter = require('./src/routers/docentesRouter');
const { routerLogin, verificarToken } = require('./src/routers/loginRouter');

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
app.use('/api/', requerimientosRouter);
app.use('/api/', laboratoriosRouter);
app.use('/api/', docentesRouter);
app.use('/api/login', routerLogin);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
