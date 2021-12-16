const express = require("express");
const router = express.Router();
const controller = require("../controllers/anuncioController");

router.get("/todos", controller.getAllAnuncios);

router.get("/filtros", controller.getByFiltros);

router.get("/:id", controller.getById);

router.post("/criar", controller.createAnuncio);

router.patch("/atualizar/:id", controller.updateAnuncio);

router.delete("/deletar/:id", controller.deleteAnuncio);

module.exports = router