const usuarioSchema = require("../models/usuarioSchema");
const mongoose = require("mongoose");

const getAllUsers = async (request, response) => {
    try {
        const usuarios = await usuarioSchema.find();
        response.status(200).json(usuarios);        
    } catch (error) {
        response.status(500).json({message: error.message});        
    }
}

const createUser = async (request, response) => {
    try {
        const usuario = new usuarioSchema({
            nome: request.body.nome,
            email: request.body.email,
            dataNascimento: request.body.dataNascimento,
            rg: request.body.rg,
            telefone: request.body.telefone,
            senha: request.body.senha,
            _id: new mongoose.Types.ObjectId()
        })

        const novoUsuario = await usuario.save();

        response.status(201).json(
            [
                {
                    message: "Novo usuário cadastrado com sucesso!",
                    novoUsuario
                }
            ]
        )        
    } catch (error) {
        response.status(500).json({message: error.message});        
    }
}

const updateUser = async (request, response) => {
    try {
        const usuarioEncontrado = await usuarioSchema.findById(request.params.id);
        
        if (usuarioEncontrado) {
            usuarioEncontrado.nome = request.body.nome || usuarioEncontrado.nome;
            usuarioEncontrado.email = request.body.email || usuarioEncontrado.email;
            usuarioEncontrado.dataNascimento = request.body.dataNascimento || usuarioEncontrado.dataNascimento;
            usuarioEncontrado.telefone = request.body.telefone || usuarioEncontrado.telefone;
            usuarioEncontrado.senha = request.body.senha || usuarioEncontrado.senha;
        }

        const usuarioSalvo = await usuarioEncontrado.save();

        response.status(201).json(
            [
                {
                    message: "Usuário atualizado com sucesso!",
                    usuarioSalvo
                }
            ]
        )        
    } catch (error) {
        response.status(500).json({message: error.message});         
    }
}

const deleteUser = async (request, response) => {
    try {
        const usuarioEncontrado = await usuarioSchema.findById(request.params.id);
        usuarioEncontrado.delete();

        response.status(200).json(
            [
                {
                    message: "O usuario a seguir foi deletado do sistema!",
                    usuarioEncontrado
                }
            ]
        )        
    } catch (error) {
        response.status(500).json({message: error.message});        
    }
}


module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}