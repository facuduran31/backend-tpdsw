const express = require('express');
const jwt = require('jsonwebtoken');
const connection = require('../database/db');
const SECRET_KEY = "claveSecreta";
const routerLogin = express.Router();

routerLogin.post('/:email/:password', (req, res) => 
{
    const usuarioAutenticado = null;
    const email = req.params.email;
    const password = req.params.password;
    
    // Verificar credenciales
    connection.query('SELECT * FROM docentes WHERE email = ? AND password = ?', [email, password], (err, results) => {
        if(err) throw res.status(500).send({error: 'Error'});
        if(results.length === 0) {
            return res.status(500).send({error: 'No se encontro ningun usuario con esas credenciales.'});
        }
        usuarioAutenticado = results[0];
    });

    // Generar y enviar token
    jwt.sign(usuarioAutenticado, SECRET_KEY, {expiresIn: '1h' }, (err, token) => {
        if(err) throw res.status(500).json({error: 'Error al generar el token.'});
        res.json({token});
    });
});


module.exports = routerLogin;
