const db = require('../database/db.js');

class LaboratorioModel {
  getAllLaboratorios(callback) {
    db.query('SELECT * FROM laboratorio', callback);
  }

  getLaboratorioById(id, callback) {
    db.query(
      'SELECT * FROM laboratorio WHERE idLaboratorio = ?', 
      [id], 
      callback
    );
  }

  getComputadorasByLaboratorioId(id, callback) {
    db.query(
      'SELECT * FROM computadora WHERE laboratorio_idLaboratorio = ?', 
      [id], 
      callback
    );
  }

  createLaboratorio(laboratorio, callback) {
    db.query(
      'INSERT INTO laboratorio (nombreLaboratorio) VALUES (?)',
      [laboratorio.nombreLaboratorio],
      callback
    );
  }

  updateLaboratorio(id, laboratorio, callback) {
    db.query(
      'UPDATE laboratorio SET nombreLaboratorio = ? WHERE idLaboratorio = ?',
      [laboratorio.nombreLaboratorio, id],
      callback
    );
  }

  deleteLaboratorio(id, callback) {
    db.query(
      'DELETE FROM laboratorio WHERE idLaboratorio = ?',
      [id],
      callback
    );
  }
}

module.exports = new LaboratorioModel();