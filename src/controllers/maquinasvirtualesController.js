const MaquinaVirtualModel = require('../models/maquinasvirtualesModel');

class MaquinavirtualController {
  getAllMaquinasvirtuales(req, res){
    MaquinaVirtualModel.getAllMaquinasvirtuales((err, maquinasvirtuales) => {
      if(err){
        res.status(500).json({ error: 'Error al obtener las maquinas virtuales', detalle: err });
      } else {
        res.json(maquinasvirtuales);
      }
    })
  }

  getMaquinavirtualById(req, res){
    const id = req.params.id;
    MaquinaVirtualModel.getMaquinavirtualById(id, (err, maquinavirtual) => {
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
    const id = req.params.id;
    MaquinaVirtualModel.updateMaquinavirtual(id, (err, maquinavirtual) => {
      if(err) {
        res.status(500).json({ error: 'Error al actualizar la maquina virtual' });
      } else {
        res.json(maquinavirtual);
      }
    });
  }

  deleteMaquinavirtual(req, res){
    const id = req.params.id;
    MaquinaVirtualModel.deleteMaquinavirtual(id, (err, maquinavirtual) => {
      if(err) {
        res.status(500).json({ error: 'Error al eliminar la maquina virtual' });
      } else {
        res.json(maquinavirtual);
      }
    });
  }
}

module.exports = new MaquinavirtualController();