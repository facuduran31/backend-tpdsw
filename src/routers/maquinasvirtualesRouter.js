const express = require('express');
const router = express.Router();
const MaquinavirtualController = require('../controllers/maquinasvirtualesController');
const { verificarToken } = require('../routers/loginRouter')

// Definir rutas
router.get('/maquinasvirtuales', verificarToken, MaquinavirtualController.getAllMaquinasvirtuales);
router.get('/maquinasvirtuales/:id', verificarToken, MaquinavirtualController.getMaquinavirtualById);
router.post('/maquinasvirtuales', verificarToken, MaquinavirtualController.createMaquinavirtual);
router.put('/maquinasvirtuales/:id', verificarToken, MaquinavirtualController.updateMaquinavirtual);
router.delete('/maquinasvirtuales/:id', verificarToken, MaquinavirtualController.deleteMaquinavirtual);

module.exports = router;
