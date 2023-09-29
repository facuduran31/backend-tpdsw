const express = require('express');
const router = express.Router();
const LaboratoriosController = require('../controllers/laboratoriosController');

// Definir rutas
router.get('/laboratorios', LaboratoriosController.getAllLaboratorios);
router.get('/laboratorios/:id', LaboratoriosController.getLaboratorioById);
router.post('/laboratorios', LaboratoriosController.createLaboratorio);
router.put('/laboratorios/:id', LaboratoriosController.updateLaboratorio);
router.delete('/laboratorios/:id', LaboratoriosController.deleteLaboratorio);

module.exports = router;
