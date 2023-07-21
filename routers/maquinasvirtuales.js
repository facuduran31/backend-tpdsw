// maquinasvirtuales.js
const express = require('express');
const routes = express.Router();
const conn = require('../database/db.js');

routes.get('/', (req, res) => {
    conn.query('SELECT * FROM maquinavirtual', (err, rows) => {
        if (err) return res.send(err);
        res.json(rows);
    });
});

routes.post('/', (req, res) => {
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

// Resto del código de actualización (PUT) y eliminación (DELETE) se mantiene igual.

module.exports = routes;
