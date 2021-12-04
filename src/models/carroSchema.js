const mongoose = require("mongoose");

const carroSchema = new mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,

    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    placa: {
        type: String,
        required: true
    },
    airbags: {
        type: Boolean,
        required: true
    },
    arCondicionado: {
        type: Boolean,
        required: true
    },
    tamanhoMala: {
        type: Number,
        required: true
    },
    cadeiraBebe: {        
        type: Boolean,
        required: true        
    }
})

module.exports = mongoose.model("carro", carroSchema);
