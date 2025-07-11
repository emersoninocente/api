const db = require("../database/mysql");
exports.listar = (_, res) => {
  db.query("SELECT * FROM usuarios", (err, resultado) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json(resultado);
  });
};
exports.criar = (req, res) => {
  const { nome, email, idade } = req.body;
  const sql = "INSERT INTO usuarios (nome, email, idade) VALUES (?, ?, ?)";
  db.query(sql, [nome, email, idade], err => {
    if (err) return res.status(500).json({ erro: err.message });
    res.status(201).json({ mensagem: "Usuário criado com sucesso" });
  });
};
