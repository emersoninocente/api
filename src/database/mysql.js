const mysql = require("mysql2");
require("dotenv").config();
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
db.connect(err => {
  if (err) {
    console.error("Erro na conexão com MySQL:", err.message);
  } else {
    console.log("Conectado ao MySQL com sucesso!");
  }
});
module.exports = db;
