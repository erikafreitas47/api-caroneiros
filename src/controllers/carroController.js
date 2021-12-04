const carroSchema = require("../models/carroSchema");
const mongoose = require("mongoose");

const getAllCarros = async (request, response) => {
    try {
        const carros = await carroSchema.find();
        response.status(200).json(carros);
    } catch (error) {
        response.status(500).json({message: error.message});        
    }
}

const createCarro = async (request, response) => {
    try {
        const carro = new carroSchema({
            marca: request.body.marca,
            modelo: request.body.modelo,
            ano: request.body.ano,
            placa: request.body.placa,
            airbags: request.body.airbags,
            arCondicionado: request.body.arCondicionado,
            tamanhoMala: request.body.tamanhoMala,
            cadeiraBebe: request.body.cadeiraBebe,
            _id: new mongoose.Types.ObjectId
        })

        const carroSalvo = await carro.save();

        response.status(200).json(
            [
                {
                    message: "Novo carro cadastrado com sucesso!",
                    carroSalvo
                }
            ]
        )
    } catch (error) {
        response.status(500).json({message: error.message});        
    }
}

const updateCarro = async (request, response) => {
    try {
        const carroEncontrado = await carroSchema.findById(request.params.id);

        if (carroEncontrado) {
            carroEncontrado.marca = request.body.marca || carroEncontrado.marca;
            carroEncontrado.modelo = request.body.modelo || carroEncontrado.modelo;
            carroEncontrado.ano = request.body.ano || carroEncontrado.ano;
            carroEncontrado.placa = request.body.placa || carroEncontrado.placa;
            carroEncontrado.airbags = request.body.airbags || carroEncontrado.airbags;
            carroEncontrado.arCondicionado = request.body.arCondicionado || carroEncontrado.arCondicionado;
            carroEncontrado.airbags = request.body.airbags || carroEncontrado.airbags;
            carroEncontrado.cadeiraBebe = request.body.cadeiraBebe || carroEncontrado.cadeiraBebe;
        }

        const carroSalvo = await carroEncontrado.save();

        response.status(200).json(
            [
                {
                    message: "Carro atualizado com sucesso!",
                    carroSalvo
                }
            ]
        )
    } catch (error) {
        response.status(500).json({message: error.message});        
    }
}

const deleteCarro = async (request, response) => {
    try {
        const carroEncontrado = await carroSchema.findById(request.params.id);
        carroEncontrado.delete();

        response.status(200).json(
            [
                {
                    message: "O carro a seguir foi deletado do sistema!",
                    carroEncontrado
                }
            ]
        )
    } catch (error) {
        response.status(500).json({message: error.message});        
    }
}



module.exports = {
    getAllCarros,
    createCarro,
    updateCarro,
    deleteCarro
}