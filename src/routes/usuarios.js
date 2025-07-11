const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");
const validarUsuario = require("../middlewares/validarUsuario");
router.get("/", usuarioController.listar);
router.post("/", validarUsuario, usuarioController.criar);
module.exports = router;
