const db = require('../database/db.js');

class ComputadoraModel {
  getAllComputadoras(callback) {
    db.query('SELECT * FROM computadora', callback);
  }

  getComputadoraById(id, callback) {
    db.query(
      'SELECT * FROM computadora WHERE idComputadora = ?', 
      [id], 
      callback
    );
  }

  createComputadora(computadora, callback) {
    db.query(
      'INSERT INTO computadora (procesador, descripcionRam, descripcionAlmacenamiento, laboratorio_idLaboratorio) VALUES (?, ?, ?, ?)',
      [computadora.procesador, computadora.descripcionRam, computadora.descripcionAlmacenamiento, computadora.laboratorio_idLaboratorio],
      callback
    );
  }

  updateComputadora(id, computadora, callback) {
    db.query(
      'UPDATE computadora SET procesador = ?, descripcionRam = ?, descripcionAlmacenamiento = ?, laboratorio_idLaboratorio = ? WHERE idComputadora = ?',
      [computadora.procesador, computadora.descripcionRam, computadora.descripcionAlmacenamiento, computadora.laboratorio_idLaboratorio, id],
      callback
    );
  }

  deleteComputadora(id, callback) {
    db.query(
      'DELETE FROM computadora WHERE idComputadora = ?',
      [id],
      callback
    );
  }
}

module.exports = new ComputadoraModel();