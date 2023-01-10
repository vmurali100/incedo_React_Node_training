const mysql = require('mysql2');

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root@123",
    database:"registerusers",
    port:3306
});

module.exports = pool.promise();