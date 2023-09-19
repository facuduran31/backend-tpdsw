const express = require('express');
const routes = express.Router();
const conn = require('../database/db.js');

routes.get('/', (req, res) => {

    const tipoUsuario = req.usuarioAutenticado.tipoUsuario;
    if (tipoUsuario !== 'Encargado') {
      return res.status(403).json({ error: 'Acceso denegado. Solo para Encargados.' });
    }
  
    conn.query('SELECT * FROM requerimiento', (err, rows) => {
        if (err) return res.send(err);
        res.json(rows);
    });
  });
  
  routes.get('/:id', (req, res) => {
  
    const tipoUsuario = req.usuarioAutenticado.tipoUsuario;
  
    if (tipoUsuario !== 'Encargado') {
      return res.status(403).json({ error: 'Acceso denegado. Solo para Encargados.' });
    }
  
      conn.query('SELECT * FROM requerimiento WHERE idRequerimiento = ?', [req.params.id], (err, rows) => {
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
          `UPDATE requerimiento SET sistemaOperativo = ?, materias = ?, programas = ? WHERE idRequerimiento = ?`,
          [req.body.sistemaOperativo, req.body.materias, req.body.programas, req.params.id],
          (err, result) => {
            if (err) return res.send(err);
            res.json(req.body);
          }
      );
  });
  
  routes.post('/', (req, res) => {
      const tipoUsuario = req.usuarioAutenticado.tipoUsuario;
    
      if (tipoUsuario !== 'Docente') {
        return res.status(403).json({ error: 'Acceso denegado. Solo para Docentes.' });
      }
  
      conn.query(
          `INSERT INTO requerimiento (sistemaOperativo, materias, programas) 
          VALUES (?, ?, ?)`,
          [req.body.sistemaOperativo, req.body.materias, req.body.programas],
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
  
      conn.query('DELETE FROM requerimiento WHERE idRequerimiento = ?', [req.params.id], (err, result) => {
        if(err) res.send(err);
        res.json(result);
      });
  });
  
  module.exports = routes;
  