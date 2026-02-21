const mysql = require('mysql2');

let connection;

const isTest = process.env.NODE_ENV === 'test';

if (!isTest) {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'encargados',
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err.message);
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