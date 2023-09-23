const express = require('express');
const routes = express.Router();
const conn = require('../database/db.js');

routes.get('/', (req, res) => {

  const tipoUsuario = req.usuarioAutenticado.tipoUsuario;
  if (tipoUsuario !== 'Encargado') {
    return res.status(403).json({ error: 'Acceso denegado. Solo para Encargados.' });
  }

  conn.query('SELECT * FROM computadora', (err, rows) => {
      if (err) return res.send(err);
      res.json(rows);
  });
});

routes.get('/:id', (req, res) => {

  const tipoUsuario = req.usuarioAutenticado.tipoUsuario;

  if (tipoUsuario !== 'Encargado') {
    return res.status(403).json({ error: 'Acceso denegado. Solo para Encargados.' });
  }

    conn.query('SELECT * FROM computadora WHERE idComputadora = ?', [req.params.id], (err, rows) => {
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
        `UPDATE computadora SET procesador = ?, descripcionRam = ?, descripcionAlmacenamiento = ?, laboratorio_idLaboratorio = ? WHERE idCmputadora = ?`,
        [req.body.procesador, req.body.descripcionRam, req.body.descripcionAlmacenamiento, req.body.laboratorio_idLaboratorio, req.params.id],
        (err, result) => {
          if (err) return res.send(err);
          res.json(req.body);
        }
    );
});

routes.post('/', (req, res) => {
    const tipoUsuario = req.usuarioAutenticado.tipoUsuario;
  
    if (tipoUsuario !== 'Encargado') {
      return res.status(403).json({ error: 'Acceso denegado. Solo para Encargados.' });
    }

    conn.query(
        `INSERT INTO computadora (procesador, descripcionRam, descripcionAlmacenamiento, laboratorio_idLaboratorio) 
        VALUES (?, ?, ?, ?)`,
        [req.body.procesador, req.body.descripcionRam, req.body.descripcionAlmacenamiento, req.body.laboratorio_idLaboratorio],
        (err, result) => {
            if (err) return res.send(err);
            res.json({ id: result.insertId });
        }
    );
});

routes.delete('/:id', (req, res) => {
    const tipoUsuario = req.usuarioAutenticado.tipoUsuario;

    if (tipoUsuario !== 'Encargado') {
      return res.status(403).json({ error: 'Acceso denegado. Solo para Encargados.' });
    }

    conn.query('DELETE FROM computadora WHERE idComputadora = ?', [req.params.id], (err, result) => {
      if(err) res.send(err);
      res.json(result);
    });
});

module.exports = routes;
