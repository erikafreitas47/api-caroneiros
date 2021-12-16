const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
    response.status(200).send({
        title: "Bem vinda (o)(e) Caroneiros - uma API do projeto final da {Reprograma}.",
        version: "1.0.0"
    })
})

module.exports = router