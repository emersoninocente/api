/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Retorna todos os usuarios cadastrados
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   nome:
 *                     type: string
 *                     example: "João Galinha"
 *                   email:
 *                     type: string
 *                     example: "joaogalinha@meu.dominio.com"
 *                   idade:
 *                     type: integer
 *                     example: 23
 */
/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Cria um novo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                   nome:
 *                     type: string
 *                     example: "João Galinha"
 *                   email:
 *                     type: string
 *                     example: "joaogalinha@meu.dominio.com"
 *                   idade:
 *                     type: integer
 *                     example: 23
 *     responses:
 *       201:
 *         description: Usuario criado com sucesso
 */
/**
 * @swagger
 * /usuarios/admin:
 *   get:
 *     summary: Rota exclusiva para administradores
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Acesso autorizado
 *       403:
 *         description: Acesso negado
 */
const express = require("express");
const router = express.Router();
const autenticarToken = require("../middlewares/autenticarToken");
const verificarAdmin = require("../middlewares/verificarAdmin");
const usuarioController = require("../controllers/usuarioController");
const validarUsuario = require("../middlewares/validarUsuario");
router.get("/admin", autenticarToken, verificarAdmin, (req, res) => {
  res.json({ mensagem: "Bem-vindo, admin!", usuario: req.usuario });
});
router.get("/", usuarioController.listar);
router.post("/", validarUsuario, usuarioController.criar);
module.exports = router;
