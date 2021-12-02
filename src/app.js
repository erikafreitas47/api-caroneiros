const express = require("express");
const cors = require("cors");

require("dotenv-safe").config();
const db = require("./database/mongoConfig");
const usuarioRoutes = require("./routes/usuarioRoute");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/usuarios", usuarioRoutes);

db.connect();

module.exports = app