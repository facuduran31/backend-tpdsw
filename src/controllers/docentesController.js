const DocenteModel = require('../models/docentesModel');

class DocenteController {
  getAllDocentes(req, res){
    DocenteModel.getAllDocentes((err, docentes) => {
      if(err){
        res.status(500).json({ error: 'Error al obtener los docentes', detalle: err });
      } else {
        res.json(docentes);
      }
    })
  }

  getDocenteByLegajo(req, res){
    const id = req.params.id;
    DocenteModel.getDocenteByLegajo(id, (err, docente) => {
      if(err) {
        res.status(500).json({ error: 'Error al obtener el docente' });
      } else {
        res.json(docente[0]);
      }
    });
  }

  createDocente(req, res){
    const docente = req.body;
    DocenteModel.createDocente(docente, (err, docente) => {
      if(err) {
        res.status(500).json({ error: 'Error al crear el docente' });
      } else {
        res.json(docente);
      }
    });
  }

  updateDocente(req, res){
    const id = req.params.id;
    const docente = req.body;
    DocenteModel.updateDocente(id, docente, (err, docente) => {
      if(err) {
        res.status(500).json({ error: 'Error al actualizar el docente' });
      } else {
        res.json(docente);
      }
    });
  }

  deleteDocente(req, res){
    const id = req.params.id;
    DocenteModel.deleteDocente(id, (err, docente) => {
      if(err) {
        res.status(500).json({ error: 'Error al eliminar el docente' });
      } else {
        res.json(docente);
      }
    });
  }
}

module.exports = new DocenteController();