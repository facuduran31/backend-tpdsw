const RequerimientoModel = require('../models/requerimientosModel');

class RequerimientoController {

  formatearFechas(requerimientos) {
    requerimientos.forEach(requerimiento => {
      requerimiento.fechaInicio = requerimiento.fechaInicio.toISOString().slice(0, 10);
      requerimiento.fechaFin = requerimiento.fechaFin.toISOString().slice(0, 10);
    });
  }

  getAllRequerimientos(req, res) {
    RequerimientoModel.getAllRequerimientos((err, requerimientos) => {
      if (err) {
        res.status(500).json({ error: 'Error al obtener los requerimientos', detalle: err });
      } else {
        this.formatearFechas(requerimientos);
        res.json(requerimientos);
      }
    });
  }

  getRequerimientoById(req, res) {
    const id = req.params.id;
    RequerimientoModel.getRequerimientoById(id, (err, requerimiento) => {
      if (err) {
        res.status(500).json({ error: 'Error al obtener el requerimiento' });
      } else {
        this.formatearFechas([requerimiento]);
        res.json(requerimiento[0]);
      }
    });
  }

  getRequerimientoByIdDocente(req, res) {
    const id = req.params.id;
    RequerimientoModel.getRequerimientoByIdDocente(id, (err, requerimientos) => {
      if (err) {
        res.status(500).json({ error: 'Error al obtener el requerimiento' });
      } else {
        this.formatearFechas(requerimientos);
        res.json(requerimientos);
      }
    });
  }

  createRequerimiento(req, res) {
    const requerimiento = req.body;
    RequerimientoModel.createRequerimiento(requerimiento, (err, requerimiento) => {
      if (err) {
        res.status(500).json({ error: 'Error al crear el requerimiento' });
      } else {
        res.json(requerimiento);
      }
    });
  }

  updateRequerimiento(req, res) {
    const id = req.params.id;
    const requerimiento = req.body;
    RequerimientoModel.updateRequerimiento(id, requerimiento, (err, requerimiento) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: 'Error al actualizar el requerimiento', error: err });
      } else {
        res.json(requerimiento);
      }
    });
  }

  deleteRequerimiento(req, res) {
    const id = req.params.id;
    RequerimientoModel.deleteRequerimiento(id, (err, requerimiento) => {
      if (err) {
        res.status(500).json({ error: 'Error al eliminar el requerimiento' });
      } else {
        res.json(requerimiento);
      }
    });
  }
}

module.exports = new RequerimientoController();
