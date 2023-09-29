const express = require('express');
const router = express.Router();
const ComputadorasController = require('../../controllers/computadorasController');

// Definir rutas
router.get('/computadoras', ComputadorasController.getAllComputadoras);
router.get('/computadoras/:id', ComputadorasController.getComputadoraById);
router.post('/computadoras', ComputadorasController.createComputadora);
router.put('/computadoras/:id', ComputadorasController.updateComputadora);
router.delete('/computadoras/:id', ComputadorasController.deleteComputadora);

module.exports = router;
