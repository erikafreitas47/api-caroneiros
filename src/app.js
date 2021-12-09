const express = require("express");
const cors = require("cors");

require("dotenv-safe").config();
const db = require("./database/mongoConfig");

const index = require('./routes/index');
const usuarioRoutes = require("./routes/usuarioRoutes");
const anuncioRoutes = require("./routes/anuncioRoutes");
const carroRoutes = require("./routes/carroRoutes");
const caronaRoutes = require("./routes/caronaRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', index);
app.use("/usuarios", usuarioRoutes);
app.use("/anuncios", anuncioRoutes);
app.use("/carros", carroRoutes);
app.use("/caronas", caronaRoutes);

db.connect();

module.exports = app

