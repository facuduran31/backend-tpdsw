const express = require('express');
const jwt = require('jsonwebtoken');
const connection = require('../database/db');
const SECRET_KEY = "claveSecreta";
const routerLogin = express.Router();

routerLogin.post('/', (req, res) => {
  const { email, password } = req.body;

  // Verificar credenciales
  connection.query('SELECT * FROM usuario WHERE email = ? AND password = ?', [email, password], (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos:', err);
      return res.status(500).json({ error: 'Error al verificar las credenciales.' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'No se encontró ningún usuario con esas credenciales.' });
    }

    let usuarioAutenticado = results[0];

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

// Middleware para verificar el token en las rutas protegidas.
function verificarToken(req, res, next) {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ error: 'Acceso denegado. Token no proporcionado.' });
    }
  
    // Verificar el token con el método 'verify' de jsonwebtoken.
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        // El token no es válido.
        console.error('Token inválido:', err);
        return res.status(401).json({ error: 'Token inválido.' });
      }
  
      // Token válido, puedes acceder a la información del usuario autenticado en 'decoded'.
      req.usuarioAutenticado = decoded;
      next();
    });
  }
  
module.exports = {
    routerLogin,
    verificarToken
};
