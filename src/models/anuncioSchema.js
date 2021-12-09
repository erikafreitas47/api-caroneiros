const mongoose = require("mongoose");

const anuncioSchema = new mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,

    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: false,
        ref: 'usuario'
    },
    dataViagem: {
        type: Date,
        required: true,
        default: new Date()
    },
    localSaida:{
        type: String,
        required: true
    },
    localChegada:{
        type: String,
        required: true
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
        required: true,
        unique: false,
        ref: 'carro'
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
    },
    cadeiraBebe: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("anuncio", anuncioSchema);
