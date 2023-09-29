const express = require('express');
const jwt = require('jsonwebtoken');
const connection = require('../database/db');
const SECRET_KEY = "claveSecreta";
const routerLogin = express.Router();

routerLogin.post('/', (req, res) => {
  const { email, password } = req.body;

  // Verificar credenciales y tipo de usuario
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
    jwt.sign(usuarioAutenticado, SECRET_KEY, { expiresIn: '24h' }, (err, token) => {
      if (err) {
        console.error('Error al generar el token:', err);
        return res.status(500).json({ error: 'Error al generar el token.' });
      }

      res.json({ token });
    });
  });
});

routerLogin.get('/verify', (req, res) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Acceso denegado. Token no proporcionado.' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      // El token no es válido.
      console.error('Token inválido:', err);
      return res.status(401).json({ error: 'Token inválido.', token: token });
    }

    // Verificar el tipo de usuario
    const tipoUsuario = decoded.tipoUsuario;
    if (tipoUsuario !== 'Docente' && tipoUsuario !== 'Encargado') {
      return res.status(403).json({ error: 'Acceso denegado. Tipo de usuario no válido.' });
    }

    res.json({ mensaje: 'Token válido.', usuarioAutenticado: decoded, token, expirado: isTokenExpirado(token)});
  });
});

function isTokenExpirado(token) {
  const { exp } = jwt.decode(token);
  const now = Date.now() / 1000;
  return now > exp;
}

// Middleware para verificar el token en las rutas protegidas.
function verificarToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Acceso denegado. Token no proporcionado.' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      // El token no es válido.
      console.error('Token inválido:', err);
      return res.status(401).json({ error: 'Token inválido.' });
    }

    // Verificar el tipo de usuario
    const tipoUsuario = decoded.tipoUsuario;
    if (tipoUsuario !== 'Docente' && tipoUsuario !== 'Encargado') {
      return res.status(403).json({ error: 'Acceso denegado. Tipo de usuario no válido.' });
    }

    req.usuarioAutenticado = decoded;
    next();
  });
}

module.exports = {
  routerLogin,
  verificarToken
};
