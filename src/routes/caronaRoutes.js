const express = require("express");
const router = express.Router();
const controller = require("../controllers/caronaController");

router.get("/todos", controller.getAllCaronas);

router.post("/criar", controller.createCarona);

router.patch("/atualizar/:id", controller.updateCarona);

router.delete("/deletar/:id", controller.deleteCarona);

module.exports = router