const express = require('express');
const jwt = require('jsonwebtoken');
const connection = require('../database/db');
const SECRET_KEY = "claveSecreta";
const routerLogin = express.Router();

routerLogin.post('/', (req, res) => {
  const { email, password } = req.body;

  // Verificar credenciales
  connection.query('SELECT * FROM docente WHERE email = ? AND password = ?', [email, password], (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos:', err);
      return res.status(500).json({ error: 'Error al verificar las credenciales.' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'No se encontró ningún usuario con esas credenciales.' });
    }

    const usuarioAutenticado = results[0];

    // Generar y enviar token
    jwt.sign(usuarioAutenticado, SECRET_KEY, { expiresIn: '1h' }, (err, token) => {
      if (err) {
        console.error('Error al generar el token:', err);
        return res.status(500).json({ error: 'Error al generar el token.' });
      }

      res.json({ token });
    });
  });
});

module.exports = routerLogin;
