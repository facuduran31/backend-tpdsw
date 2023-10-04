const db = require('../database/db.js');

class MaquinaVirtualModel {
  getAllMaquinasvirtuales(callback) {
    db.query('SELECT * FROM maquinavirtual', callback);
  }

  getMaquinavirtualById(id, callback) {
    db.query(
      'SELECT * FROM maquinavirtual WHERE idMaquinaVirtual = ?', 
      [id], 
      callback
    );
  }

  createMaquinavirtual(maquinavirtual, callback) {
    db.query(
      'INSERT INTO maquinavirtual (sistemaOperativo, materias, programas) VALUES (?, ?, ?)',
      [maquinavirtual.sistemaOperativo, maquinavirtual.materias, maquinavirtual.programas],
      callback
    );
  }

  updateMaquinavirtual(id, maquinavirtual, callback) {
    db.query(
      'UPDATE maquinavirtual SET sistemaOperativo = ?, materias = ?, programas = ? WHERE idMaquinaVirtual = ?',
      [maquinavirtual.sistemaOperativo, maquinavirtual.materias, maquinavirtual.programas, id],
      callback
    );
  }

  deleteMaquinavirtual(id, callback) {
    db.query(
      'DELETE FROM maquinavirtual WHERE idMaquinaVirtual = ?',
      [id],
      callback
    );
  }
}

module.exports = new MaquinaVirtualModel();