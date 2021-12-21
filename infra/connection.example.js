const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "HOST",
    port: 3306,
    user: "USERNAME",
    password: "PASSWORD",
    database: "DB_NAME"
});

module.exports = connection;