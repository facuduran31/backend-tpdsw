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
    LaboratorioModel.getLaboratorioById((err, laboratorio) => {
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
    LaboratorioModel.updateLaboratorio((err, laboratorio) => {
      if(err) {
        res.status(500).json({ error: 'Error al actualizar el laboratorio' });
      } else {
        res.json(laboratorio);
      }
    });
  }

  deleteLaboratorio(req, res){
    LaboratorioModel.deleteLaboratorio((err, laboratorio) => {
      if(err) {
        res.status(500).json({ error: 'Error al eliminar el laboratorio' });
      } else {
        res.json(laboratorio);
      }
    });
  }
}

module.exports = new LaboratorioController();