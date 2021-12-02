const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,

    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    rg: {
        type: String,
        unique: true,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    dataCriacao: {
        type: Date,
        required: true,
        default: new Date()
    },
    senha: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("usuario", usuarioSchema);