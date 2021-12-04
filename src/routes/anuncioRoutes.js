const express = require("express");
const router = express.Router();
const controller = require("../controllers/anuncioController");

router.get("/todos", controller.getAllAnuncios);

router.post("/criar", controller.createAnuncio);

router.patch("/atualizar/:id", controller.updateAnuncio);

router.delete("/deletar/:id", controller.deleteAnuncio);

module.exports = router