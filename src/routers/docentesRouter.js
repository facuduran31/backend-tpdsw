const express = require('express');
const router = express.Router();
const DocentesController = require('../controllers/docentesController');
const { verificarToken } = require('../routers/loginRouter')

// Definir rutas
router.get('/docentes', verificarToken, DocentesController.getAllDocentes);
router.get('/docentes/:id', verificarToken, DocentesController.getDocenteByLegajo);
router.post('/docentes', verificarToken, DocentesController.createDocente);
router.put('/docentes/:id', verificarToken, DocentesController.updateDocente);
router.delete('/docentes/:id', verificarToken, DocentesController.deleteDocente);

module.exports = router;
