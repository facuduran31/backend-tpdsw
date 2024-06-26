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
      'INSERT INTO computadora (procesador, descripcionRam, descripcionAlmacenamiento, imagen, laboratorio_idLaboratorio) VALUES (?, ?, ?, ?, ?)',
      [computadora.procesador, computadora.descripcionRam, computadora.descripcionAlmacenamiento, computadora.imagen, computadora.laboratorio_idLaboratorio],
      callback
    );
  }

  updateComputadora(id, computadora, callback) {
    console.log(computadora)
    db.query(
      'UPDATE computadora SET procesador = ?, descripcionRam = ?, descripcionAlmacenamiento = ?, laboratorio_idLaboratorio = ?, imagen = ? WHERE idComputadora = ?',
      [computadora.procesador, computadora.descripcionRam, computadora.descripcionAlmacenamiento, computadora.Laboratorio_idLaboratorio, computadora.imagen, id],
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