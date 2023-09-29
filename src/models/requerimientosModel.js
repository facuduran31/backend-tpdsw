const db = require('../database/db.js');

class RequerimientoModel {

  getAllRequerimientos(callback) {
    db.query('SELECT * FROM requerimiento', callback);
  }

  getRequerimientoById(id, callback) {
    db.query(
      'SELECT * FROM requerimiento WHERE idRequerimiento = ?', 
      [id], 
      callback
    );
  }

  createRequerimiento(requerimiento, callback) {
    db.query(
      'INSERT INTO requerimiento (tipoRequerimiento, estado, comentarioEncargado, legajoEncargado, legajoDocente, hdmi, vga, mouse, idrequerimiento, fechaInicio, fechaFin, horaInicio, horaFin, materia, zapatilla, proyector, tipoReserva, descripcion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        requerimiento.tipoRequerimiento,
        requerimiento.estado,
        requerimiento.comentarioEncargado,
        requerimiento.legajoEncargado,
        requerimiento.legajoDocente,
        requerimiento.hdmi ? 1 : 0,
        requerimiento.vga ? 1 : 0,
        requerimiento.mouse ? 1 : 0,
        requerimiento.idrequerimiento,
        requerimiento.fechaInicio,
        requerimiento.fechaFin,
        requerimiento.horaInicio,
        requerimiento.horaFin,
        requerimiento.materia,
        requerimiento.zapatilla ? 1 : 0,
        requerimiento.proyector ? 1 : 0,
        requerimiento.tipoReserva,
        requerimiento.descripcion,
      ],
      callback
    );
  }

  updateRequerimiento(id, requerimiento, callback) {
    db.query(
      'UPDATE requerimiento SET tipoRequerimiento = ?, estado = ?, comentarioEncargado = ?, legajoEncargado = ?, legajoDocente = ?, hdmi = ?, vga = ?, mouse = ?, idrequerimiento = ?, fechaInicio = ?, fechaFin = ?, horaInicio = ?, horaFin = ?, materia = ?, zapatilla = ?, proyector = ?, tipoReserva = ?, descripcion = ? WHERE idRequerimiento = ?',
      [requerimiento.tipoRequerimiento, requerimiento.estado, requerimiento.programas, requerimiento.comentarioEncargado, requerimiento.legajoEncargado, requerimiento.legajoDocente, requerimiento.hdmi, requerimiento.vga, requerimiento.mouse, requerimiento.idrequerimiento, requerimiento.fechaInicio, requerimiento.fechaFin, requerimiento.horaInicio, requerimiento.horaFin, requerimiento.materia, requerimiento.zapatilla, requerimiento.proyector, requerimiento.tipoReserva, requerimiento.descripcion, id],
      callback
    );
  }

  deleteRequerimiento(id, callback) {
    db.query(
      'DELETE FROM requerimiento WHERE idRequerimiento = ?',
      [id],
      callback
    );
  }
}

module.exports = new RequerimientoModel();