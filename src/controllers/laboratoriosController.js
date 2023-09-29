const LaboratorioModel = require('../models/laboratoriosModel');

class LaboratorioController {
  getAllLaboratorios(req, res){
    LaboratorioModel.getAllLaboratorios((err, laboratorios) => {
      if(err){
        res.status(500).json({ error: 'Error al obtener los laboratorios' });
      } else {
        res.json(laboratorios);
      }
    })
  }

  getLaboratorioById(req, res){
    const id = req.params.id;
    LaboratorioModel.getLaboratorioById(id, (err, laboratorio) => {
      if(err) {
        res.status(500).json({ error: 'Error al obtener la laboratorio' });
      } else {
        res.json(laboratorio);
      }
    });
  }

  createLaboratorio(req, res){
    LaboratorioModel.createLaboratorio((err, laboratorio) => {
      if(err) {
        res.status(500).json({ error: 'Error al crear el laboratorio' });
      } else {
        res.json(laboratorio);
      }
    });
  }

  updateLaboratorio(req, res){
    const id = req.params.id;
    LaboratorioModel.updateLaboratorio(id, (err, laboratorio) => {
      if(err) {
        res.status(500).json({ error: 'Error al actualizar el laboratorio' });
      } else {
        res.json(laboratorio);
      }
    });
  }

  deleteLaboratorio(req, res){
    const id = req.params.id;
    LaboratorioModel.deleteLaboratorio(id, (err, laboratorio) => {
      if(err) {
        res.status(500).json({ error: 'Error al eliminar el laboratorio' });
      } else {
        res.json(laboratorio);
      }
    });
  }
}

module.exports = new LaboratorioController();