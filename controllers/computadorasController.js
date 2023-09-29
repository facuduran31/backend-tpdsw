const ComputadoraModel = require('../models/computadorasModel');

class ComputadoraController {
  getAllComputadoras(req, res){
    ComputadoraModel.getAllComputadoras((err, computadoras) => {
      if(err){
        res.status(500).json({ error: 'Error al obtener las computadoras' });
      } else {
        res.json(computadoras);
      }
    })
  }

  getComputadoraById(req, res){
    ComputadoraModel.getcomputadoraById((err, computadora) => {
      if(err) {
        res.status(500).json({ error: 'Error al obtener la computadora' });
      } else {
        res.json(computadora);
      }
    });
  }

  createComputadora(req, res){
    ComputadoraModel.createComputadora((err, computadora) => {
      if(err) {
        res.status(500).json({ error: 'Error al crear la computadora' });
      } else {
        res.json(computadora);
      }
    });
  }

  updateComputadora(req, res){
    ComputadoraModel.updateComputadora((err, computadora) => {
      if(err) {
        res.status(500).json({ error: 'Error al actualizar la computadora' });
      } else {
        res.json(computadora);
      }
    });
  }

  deleteComputadora(req, res){
    ComputadoraModel.deleteComputadora((err, computadora) => {
      if(err) {
        res.status(500).json({ error: 'Error al eliminar la computadora' });
      } else {
        res.json(computadora);
      }
    });
  }
}

module.exports = new ComputadoraController();