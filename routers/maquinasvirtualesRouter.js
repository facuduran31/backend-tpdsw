// routers/encargadoRouter.js
const express = require('express');
const router = express.Router();
const MaquinavirtualController = require('../controllers/maquinasvirtualesController');

// Definir rutas
router.get('/encargados', MaquinavirtualController.getAllMaquinasvirtuales);
router.get('/encargados/:id', MaquinavirtualController.getMaquinavirtualById);
router.post('/encargados', MaquinavirtualController.createMaquinavirtual);
router.put('/encargados/:id', MaquinavirtualController.updateMaquinavirtual);
router.delete('/encargados/:id', MaquinavirtualController.deleteMaquinavirtual);

module.exports = router;
