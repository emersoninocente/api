const db = require("../database/mysql");
exports.listar = (_, res) => {
  db.query("SELECT * FROM cursos", (err, resultado) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json(resultado);
  });
};
exports.criar = (req, res) => {
  const { nome, carga_horaria } = req.body;
  db.query("INSERT INTO cursos (nome, carga_horaria) VALUES (?, ?)",
    [nome, carga_horaria], err => {
      if (err) return res.status(500).json({ erro: err.message });
      res.status(201).json({ mensagem: "Curso criado com sucesso" });
    });
};
