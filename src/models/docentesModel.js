const db = require('../database/db.js');

class usuarioModel {
  getAllDocentes(callback) {
    db.query('SELECT * FROM usuario', callback);
  }

  getDocenteByLegajo(id, callback) {
    db.query(
      'SELECT * FROM usuario WHERE legajo = ?', 
      [id], 
      callback
    );
  }

  createDocente(usuario, callback) {
    db.query(
      'INSERT INTO usuario (legajo, nombre, apellido, email, password, tipoUsuario) VALUES (?, ?, ?, ?, ?, ?)',
      [usuario.legajo, usuario.nombre, usuario.apellido, usuario.email, usuario.password, usuario.tipoUsuario],
      callback
    );
  }

  updateDocente(id, usuario, callback) {
    db.query(
      'UPDATE usuario SET legajo = ?, nombre = ?, apellido = ?, email = ?, password = ?, tipoUsuario = ? WHERE legajo = ?',
      [usuario.legajo, usuario.nombre, usuario.apellido, usuario.email, usuario.password, usuario.tipoUsuario, id],
      callback
    );
  }

  deleteDocente(id, callback) {
    db.query(
      'DELETE FROM usuario WHERE legajo = ?',
      [id],
      callback
    );
  }
}

module.exports = new usuarioModel();