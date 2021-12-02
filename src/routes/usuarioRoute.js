const express = require("express");
const router = express.Router();
const controller = require("../controllers/usuarioController");

router.get("/todos", controller.getAllUsers);

router.post("/criar", controller.createUser);

router.patch("/atualizar/:id", controller.updateUser);

router.delete("/deletar/:id", controller.deleteUser);

module.exports = router