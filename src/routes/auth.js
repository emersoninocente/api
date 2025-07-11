const express = require("express");
const router = express.Router();
const { login } = require("../controllers/authController");

/**
 * @swagger
 * /auth:
 *   post:
 *     summary: Realiza login e retorna token JWT
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token JWT
 *       401:
 *         description: Credenciais inválidas
 */
router.post("/", login);

module.exports = router;
