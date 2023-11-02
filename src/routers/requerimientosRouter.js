const express = require('express');
const router = express.Router();
const RequerimientosController = require('../controllers/requerimientosController');
const { verificarToken } = require('../routers/loginRouter')

// Definir rutas
router.get('/requerimientos', verificarToken, RequerimientosController.getAllRequerimientos);
router.get('/requerimientos/:id', verificarToken, RequerimientosController.getRequerimientoById);
router.get('/requerimientos/docente/:id', verificarToken, RequerimientosController.getRequerimientoByIdDocente);
router.post('/requerimientos', verificarToken, RequerimientosController.createRequerimiento);
router.put('/requerimientos/:id', verificarToken, RequerimientosController.updateRequerimiento);
router.delete('/requerimientos/:id', verificarToken, RequerimientosController.deleteRequerimiento);

module.exports = router;
