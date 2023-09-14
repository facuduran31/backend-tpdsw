const express = require('express');
const routes = express.Router();
const conn = require('../database/db.js');

routes.get('/', (req, res) => {

  const tipoUsuario = req.usuarioAutenticado.tipoUsuario;
  if (tipoUsuario !== 'Encargado') {
    return res.status(403).json({ error: 'Acceso denegado. Solo para Encargados.' });
  }

  conn.query('SELECT * FROM maquinavirtual', (err, rows) => {
      if (err) return res.send(err);
      res.json(rows);
  });
});

routes.get('/:id', (req, res) => {
    conn.query('SELECT * FROM maquinavirtual WHERE idMaquinaVirtual = ?', [req.params.id], (err, rows) => {
    if (err) return res.send(err);
    console.log(rows[0]);
    res.json(rows[0]);
  });
});

routes.put('/:id', (req, res) => {
    const tipoUsuario = req.usuarioAutenticado.tipoUsuario;

    if (tipoUsuario !== 'Encargado') {
      return res.status(403).json({ error: 'Acceso denegado. Solo para Encargados.' });
    }

    conn.query(
        `UPDATE maquinavirtual SET sistemaOperativo = ?, materias = ?, programas = ? WHERE idMaquinaVirtual = ?`,
        [req.body.sistemaOperativo, req.body.materias, req.body.programas, req.params.id],
        (err, result) => {
          if (err) return res.send(err);
          res.json(result);
        }
    );
});

routes.post('/', (req, res) => {
    const tipoUsuario = req.usuarioAutenticado.tipoUsuario;
  
    if (tipoUsuario !== 'Encargado') {
      return res.status(403).json({ error: 'Acceso denegado. Solo para Encargados.' });
    }

    conn.query(
        `INSERT INTO maquinavirtual (sistemaOperativo, materias, programas) 
        VALUES (?, ?, ?)`,
        [req.body.sistemaOperativo, req.body.materias, req.body.programas],
        (err, result) => {
            if (err) return res.send(err);
            res.json({ id: result.insertId });
        }
    );
});

module.exports = routes;
