const mongoose = require("mongoose");

const caronaSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    anuncioCarona: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'anuncio'
    },
    usuarioCarona: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario'
    }
})

module.exports = mongoose.model("carona", caronaSchema);
