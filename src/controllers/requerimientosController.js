const RequerimientoModel = require('../models/requerimientosModel');

class RequerimientoController {
  getAllRequerimientos(req, res){
    RequerimientoModel.getAllRequerimientos((err, requerimientos) => {
      if(err){
        res.status(500).json({ error: 'Error al obtener los requerimientos', detalle: err });
      } else {
        res.json(requerimientos);
      }
    })
  }

  getRequerimientoById(req, res){
    RequerimientoModel.getRequerimientoById((err, requerimiento) => {
      if(err) {
        res.status(500).json({ error: 'Error al obtener el requerimiento' });
      } else {
        res.json(requerimiento);
      }
    });
  }

  createRequerimiento(req, res){
    RequerimientoModel.createRequerimiento((err, requerimiento) => {
      if(err) {
        res.status(500).json({ error: 'Error al crear el requerimiento'});
      } else {
        res.json(requerimiento);
      }
    });
  }

  updateRequerimiento(req, res){
    RequerimientoModel.updateRequerimiento((err, requerimiento) => {
      if(err) {
        res.status(500).json({ error: 'Error al actualizar el requerimiento' });
      } else {
        res.json(requerimiento);
      }
    });
  }

  deleteRequerimiento(req, res){
    RequerimientoModel.deleteRequerimiento((err, requerimiento) => {
      if(err) {
        res.status(500).json({ error: 'Error al eliminar el requerimiento' });
      } else {
        res.json(requerimiento);
      }
    });
  }
}

module.exports = new RequerimientoController();