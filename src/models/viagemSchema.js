const mongoose = require("mongoose");

const viagemSchema = new mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,

    dataViagem: {
        type: Date,
        required: true,
        default: new Date()
    },
    turno: {
        type: String,
        required: true
    },
    horario: {
        type: String,
        required: true
    },
    carro: {
        type: String,
        required: true
    },
    arCondicionado: {
        type: Boolean,
        required: true
    },
    espacoMala: {
        type: Boolean,
        required: true
    },
    vagas: {
        type: Number,
        required: true
    },
    aceitaPets: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("viagem", viagemSchema);
