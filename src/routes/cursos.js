/**
 * @swagger
 * /cursos:
 *   get:
 *     summary: Retorna todos os cursos cadastrados
 *     tags: [Cursos]
 *     responses:
 *       200:
 *         description: Lista de cursos
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
 *                     example: "JavaScript Avançado"
 *                   carga_horaria:
 *                     type: integer
 *                     example: 40
 */
/**
 * @swagger
 * /cursos:
 *   post:
 *     summary: Cria um novo curso
 *     tags: [Cursos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               carga_horaria:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Curso criado com sucesso
 */


const express = require("express");
const router = express.Router();
const cursoController = require("../controllers/cursoController");
const validarCurso = require("../middlewares/validarCurso");
router.get("/", cursoController.listar);
router.post("/", validarCurso, cursoController.criar);
module.exports = router;
