const caronaSchema = require("../models/caronaSchema");
const mongoose = require("mongoose");

const getAllCaronas = async (request, response) => {
    try {
        const caronas = await caronaSchema.find();
        response.status(200).json(caronas);
    } catch (error) {
        response.status(500).json({message: error.message});        
    }
}

const createCarona = async (request, response) => {
    try {
        const carona = new caronaSchema({
            anuncioCarona: request.body.anuncioCarona,
            usuarioCarona: request.body.usuarioCarona,
            _id: new mongoose.Types.ObjectId
        })

        const novaCarona = await carona.save();

        response.status(200).json(
            [
                {
                    message: "Nova carona cadastrada com sucesso!",
                    novaCarona
                }
            ]
        )
    } catch (error) {
        response.status(500).json({message: error.message});        
    }
}

const updateCarona = async (request, response) => {
    try {
        const caronaEncontrada = await caronaSchema.findById(request.params.id);

        if (caronaEncontrada) {
            caronaEncontrada.anuncioCarona = request.body.anuncioCarona || caronaEncontrada.anuncioCarona;
            caronaEncontrada.usuarioCarona = request.body.usuarioCarona || caronaEncontrada.usuarioCarona;
        }

        const caronaSalva = await caronaEncontrada.save();

        response.status(200).json(
            [
                {
                    message: "Carona atualizada com sucesso!",
                    caronaSalva
                }
            ]
        )
    } catch (error) {
        response.status(500).json({message: error.message});        
    }
}

const deleteCarona = async (request, response) => {
    try {
        const caronaEncontrada = await caronaSchema.findById(request.params.id);
        caronaEncontrada.delete();

        response.status(200).json(
            [
                {
                    message: "O anuncio a seguir foi deletado do sistema!",
                    caronaEncontrada
                }
            ]
        )        
    } catch (error) {
        response.status(500).json({message: error.message});        
    }
}

module.exports = {
    getAllCaronas,
    createCarona,
    updateCarona,
    deleteCarona
}