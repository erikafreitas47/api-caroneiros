const express = require("express");
const cors = require("cors");

require("dotenv-safe").config();
const db = require("./database/mongoConfig");

const usuarioRoutes = require("./routes/usuarioRoutes");
const anuncioRoutes = require("./routes/anuncioRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/usuarios", usuarioRoutes);
app.use("/anuncios", anuncioRoutes);

db.connect();

module.exports = app

