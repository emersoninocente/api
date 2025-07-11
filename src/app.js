const express = require("express");
const app = express();

const usuariosRoutes = require("./routes/usuarios");
const cursosRoutes = require("./routes/cursos");
//const inscricoesRoutes = require("./routes/inscricoes");
const swaggerDocs = require("./swagger");

app.use(express.json());

app.use("/usuarios", usuariosRoutes);
app.use("/cursos", cursosRoutes);
//app.use("/inscricoes", inscricoesRoutes);

swaggerDocs(app); // Ativa /api-docs

module.exports = app;
