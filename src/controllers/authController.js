const jwt = require("jsonwebtoken");
const db = require("../database/mysql");

exports.login = (req, res) => {
  const { email, senha } = req.body;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, resultado) => {
    if (err) return res.status(500).json({ erro: err.message });
    if (!resultado.length || resultado[0].senha !== senha) {
      return res.status(401).json({ erro: "Credenciais inválidas" });
    }

    const usuario = resultado[0];
    const token = jwt.sign(
      { id: usuario.id, perfil: usuario.perfil },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({ token });
  });
};
