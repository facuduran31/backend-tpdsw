const express = require('express');
const router = express.Router();
const MaquinavirtualController = require('../controllers/computadorasController');

// Definir rutas
router.get('/maquinasvirtuales', MaquinavirtualController.getAllMaquinasvirtuales);
router.get('/maquinasvirtuales/:id', MaquinavirtualController.getMaquinavirtualById);
router.post('/maquinasvirtuales', MaquinavirtualController.createMaquinavirtual);
router.put('/maquinasvirtuales/:id', MaquinavirtualController.updateMaquinavirtual);
router.delete('/maquinasvirtuales/:id', MaquinavirtualController.deleteMaquinavirtual);

module.exports = router;
