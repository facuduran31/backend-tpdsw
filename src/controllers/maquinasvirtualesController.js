const MaquinaVirtualModel = require('../models/maquinasvirtualesModel');

class MaquinavirtualController {
  getAllMaquinasvirtuales(req, res){
    MaquinaVirtualModel.getAllMaquinasvirtuales((err, maquinasvirtuales) => {
      if(err){
        res.status(500).json({ error: 'Error al obtener las maquinas virtuales' });
      } else {
        res.json(maquinasvirtuales);
      }
    })
  }

  getMaquinavirtualById(req, res){
    MaquinaVirtualModel.getMaquinavirtualById((err, maquinavirtual) => {
      if(err) {
        res.status(500).json({ error: 'Error al obtener la maquina virtual' });
      } else {
        res.json(maquinavirtual);
      }
    });
  }

  createMaquinavirtual(req, res){
    MaquinaVirtualModel.createMaquinavirtual((err, maquinavirtual) => {
      if(err) {
        res.status(500).json({ error: 'Error al crear la maquina virtual' });
      } else {
        res.json(maquinavirtual);
      }
    });
  }

  updateMaquinavirtual(req, res){
    MaquinaVirtualModel.updateMaquinavirtual((err, maquinavirtual) => {
      if(err) {
        res.status(500).json({ error: 'Error al actualizar la maquina virtual' });
      } else {
        res.json(maquinavirtual);
      }
    });
  }

  deleteMaquinavirtual(req, res){
    MaquinaVirtualModel.deleteMaquinavirtual((err, maquinavirtual) => {
      if(err) {
        res.status(500).json({ error: 'Error al eliminar la maquina virtual' });
      } else {
        res.json(maquinavirtual);
      }
    });
  }
}

module.exports = new MaquinavirtualController();