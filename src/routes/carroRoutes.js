const express = require("express");
const router = express.Router();
const controller = require("../controllers/carroController");

router.get("/todos", controller.getAllCarros);

router.post("/criar", controller.createCarro);

router.patch("/atualizar/:id", controller.updateCarro);

router.delete("/deletar/:id", controller.deleteCarro);

module.exports = router