const express = require("express");
const router = express.Router();
const cursoController = require("../controllers/cursoController");
const validarCurso = require("../middlewares/validarCurso");
router.get("/", cursoController.listar);
router.post("/", validarCurso, cursoController.criar);
module.exports = router;
