const express = require('express');
const router = express.Router();
const ComputadorasController = require('../controllers/computadorasController');

// Definir rutas
router.get('/computadoras', ComputadorasController.ge);
router.get('/computadoras/:id', ComputadorasController.getMaquinavirtualById);
router.post('/computadoras', ComputadorasController.createMaquinavirtual);
router.put('/computadoras/:id', ComputadorasController.updateMaquinavirtual);
router.delete('/computadoras/:id', ComputadorasController.deleteMaquinavirtual);

module.exports = router;
