const app = require("./src/app");
require('dotenv').config()

const PORT = process.env.PORT || 9090;

app.listen(PORT, () => {
    console.log(`Servidor da API - Caroneiros rodando na porta ${PORT}`);
})