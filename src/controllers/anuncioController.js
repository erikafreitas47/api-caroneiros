const anuncioSchema = require("../models/anuncioSchema");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const mongoose = require("mongoose");

const getAllAnuncios = async (request, response) => {
    try {
        const anuncios = await anuncioSchema.find();
        response.status(200).json(anuncios);        
    } catch (error) {
        response.status(500).json({message: error.message});        
    }
}

const getByFiltros = async (request, response) => {
    try {
        
        const filtrados = await anuncioSchema.find({espacoMala: request.body.espacoMala, aceitaPets: request.body.aceitaPets, cadeiraBebe: request.body.cadeiraBebe});

        response.status(200).json(filtrados);        
    } catch (error) {
        response.status(500).json({message: error.message});        
    }
}

const getById = async (request, response) => {
    try {
        const anuncioEncontrado = await anuncioSchema.findById(request.params.id);

        response.status(200).json(
            [
                {
                    message: "Anuncio encontrado:",
                    anuncioEncontrado
                }
            ]
        )       
    } catch (error) {
        response.status(500).json({message: error.message});        
    }
}

const createAnuncio = async (request, response) => {

    const authHeader = request.get('authorization');
    if (!authHeader) {
        return response.status(401).send("Não autorizado");
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, SECRET, async function (erro) {
        if (erro) {
            return response.status(403).send('Token invalido!');
    }

    try {
        const anuncio = new anuncioSchema({
            usuario: request.body.usuario,
            dataViagem: request.body.dataViagem,
            localSaida: request.body.localSaida,
            localChegada: request.body.localChegada,
            turno: request.body.turno,
            horario: request.body.horario,
            carro: request.body.carro,
            arCondicionado: request.body.arCondicionado,
            espacoMala: request.body.espacoMala,
            vagas: request.body.vagas,
            aceitaPets: request.body.aceitaPets,
            cadeiraBebe: request.body.cadeiraBebe,
            _id: new mongoose.Types.ObjectId()
        })

        const novoAnuncio = await anuncio.save();

        response.status(201).json(
            [
                {
                    message: "Novo anuncio de carona cadastrado com sucesso!",
                    novoAnuncio
                    
                }
            ]
        )        
    } catch (error) {
        response.status(500).json({message: error.message});        
    }
  })
}

const updateAnuncio = async (request, response) => {

    const authHeader = request.get('authorization');
    if (!authHeader) {
        return response.status(401).send("Não autorizado");
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, SECRET, async function (erro) {
        if (erro) {
            return response.status(403).send('Token invalido!');
    }

    try {
        const anuncioEncontrado = await anuncioSchema.findById(request.params.id);
        
        if (anuncioEncontrado) {
            anuncioEncontrado.dataViagem = request.body.dataViagem || anuncioEncontrado.dataViagem;
            anuncioEncontrado.localSaida = request.body.localSaida || anuncioEncontrado.localSaida;
            anuncioEncontrado.localChegada = request.body.localChegada || anuncioEncontrado.localChegada;
            anuncioEncontrado.turno = request.body.turno || anuncioEncontrado.turno;
            anuncioEncontrado.horario = request.body.horario || anuncioEncontrado.horario;
            anuncioEncontrado.carro = request.body.carro || anuncioEncontrado.carro;
            anuncioEncontrado.arCondicionado = request.body.arCondicionado || anuncioEncontrado.arCondicionado;
            anuncioEncontrado.espacoMala = request.body.espacoMala || anuncioEncontrado.espacoMala;
            anuncioEncontrado.vagas = request.body.vagas || anuncioEncontrado.vagas;
            anuncioEncontrado.aceitaPets = request.body.aceitaPets || anuncioEncontrado.aceitaPets;
            anuncioEncontrado.cadeiraBebe = request.body.cadeiraBebe || anuncioEncontrado.cadeiraBebe
        }

        const anuncioSalvo = await anuncioEncontrado.save();

        response.status(201).json(
            [
                {
                    message: "Usuário atualizado com sucesso!",
                    anuncioSalvo
                }
            ]
        )        
    } catch (error) {
        response.status(500).json({message: error.message});         
    }
  })  
}

const deleteAnuncio = async (request, response) => {

    const authHeader = request.get('authorization');
    if (!authHeader) {
        return response.status(401).send("Não autorizado");
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, SECRET, async function (erro) {
        if (erro) {
            return response.status(403).send('Token invalido!');
    }

    try {
        const anuncioEncontrado = await anuncioSchema.findById(request.params.id);
        anuncioEncontrado.delete();

        response.status(200).json(
            [
                {
                    message: "O anuncio a seguir foi deletado do sistema!",
                    anuncioEncontrado
                }
            ]
        )        
    } catch (error) {
        response.status(500).json({message: error.message});        
    }
 })  
}

module.exports = {
    getAllAnuncios,
    getByFiltros,
    getById,
    createAnuncio,
    updateAnuncio,
    deleteAnuncio
}