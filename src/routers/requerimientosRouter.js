const express = require('express');
const router = express.Router();
const RequerimientosController = require('../controllers/requerimientosController');

// Definir rutas
router.get('/requerimientos', RequerimientosController.getAllRequerimientos);
router.get('/requerimientos/:id', RequerimientosController.getAllRequerimientos);
router.post('/requerimientos', RequerimientosController.createRequerimiento);
router.put('/requerimientos/:id', RequerimientosController.updateRequerimiento);
router.delete('/requerimientos/:id', RequerimientosController.deleteRequerimiento);

module.exports = router;
