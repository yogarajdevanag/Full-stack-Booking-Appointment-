const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Yogu@2112', // your password
  database: 'appointmentdb'
});

module.exports = pool.promise();
