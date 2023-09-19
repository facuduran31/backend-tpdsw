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
          `UPDATE requerimiento SET tipoRequerimiento = ?, estado = ?, comentarioEncargado = ?, legajoEncargado = ?, legajoDocente = ?, hdmi = ?, vga = ?, mouse = ?, idLaboratorio = ?, fechaInicio = ?, fechaFin = ?, horaInicio = ?, horaFin = ?, materia = ?, zapatilla = ?, proyector = ?, tipoReserva = ?, descripcion = ? WHERE idRequerimiento = ?`,
          [req.body.tipoRequerimiento, req.body.estado, req.body.programas, req.params.comentarioEncargado, req.params.legajoEncargado, req.params.legajoDocente, req.params.hdmi, req.params.vga, req.params.mouse, req.params.idLaboratorio, req.params.fechaInicio, req.params.fechaFin, req.params.horaInicio, req.params.horaFin, req.params.materia, req.params.zapatilla, req.params.proyector, req.params.tipoReserva, req.params.descripcion, req.params.idRequerimiento],
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
          `INSERT INTO requerimiento (tipoRequerimiento, estado, comentarioEncargado, legajoEncargado, legajoDocente, hdmi, vga, mouse, idLaboratorio, fechaInicio, fechaFin, horaInicio, horaFin, materia, zapatilla, proyector, tipoReserva, descripcion) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [req.body.tipoRequerimiento, req.body.estado, req.body.programas, req.body.comentarioEncargado, req.body.legajoEncargado, req.body.legajoDocente, req.body.hdmi, req.body.vga, req.body.mouse, req.body.idLaboratorio, req.body.fechaInicio, req.body.fechaFin, req.body.horaInicio, req.body.horaFin, req.body.materia, req.body.zapatilla, req.body.proyector, req.body.tipoReserva, req.body.descripcion, req.body.idRequerimiento],
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
  