function validarCurso(req, res, next) {
  const { nome, carga_horaria } = req.body;
  if (!nome || nome.length < 3) return res.status(400).json({ erro: "Nome do curso inválido" });
  if (!Number.isInteger(carga_horaria) || carga_horaria <= 0) return res.status(400).json({ erro: "Carga horária inválida" });
  next();
}
module.exports = validarCurso;
