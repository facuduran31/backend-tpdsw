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
    const id = req.params.id;
    ComputadoraModel.getcomputadoraById(id, (err, computadora) => {
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
    const id = req.params.id;
    ComputadoraModel.updateComputadora(id, (err, computadora) => {
      if(err) {
        res.status(500).json({ error: 'Error al actualizar la computadora' });
      } else {
        res.json(computadora);
      }
    });
  }

  deleteComputadora(req, res){
    const id = req.params.id;
    ComputadoraModel.deleteComputadora(id, (err, computadora) => {
      if(err) {
        res.status(500).json({ error: 'Error al eliminar la computadora' });
      } else {
        res.json(computadora);
      }
    });
  }
}

module.exports = new ComputadoraController();