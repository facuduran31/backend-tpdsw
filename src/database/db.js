const mysql = require('mysql2');
require('dotenv').config()

let connection;

const isTest = process.env.NODE_ENV === 'test';

if (!isTest) {
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err.message, process.env.DB_HOST);
    } else {
      console.log('Conexión exitosa a la base de datos');
    }
  });

} else {
  // Mock simple para tests
  connection = {
    query: () => Promise.resolve([]),
    end: () => {}
  };
}

module.exports = connection;