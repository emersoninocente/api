function validarUsuario(req, res, next) {
  const { nome, email, idade } = req.body;
  if (!nome || nome.length < 2) return res.status(400).json({ erro: "Nome inválido" });
  if (!email || !email.includes("@")) return res.status(400).json({ erro: "Email inválido" });
  if (!Number.isInteger(idade) || idade <= 0) return res.status(400).json({ erro: "Idade inválida" });
  next();
}
module.exports = validarUsuario;
