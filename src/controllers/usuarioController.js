const bcrypt = require("bcrypt");
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");
const usuarioSchema = require("../models/usuarioSchema");
const { hashPassword } = require("../helpers/auth");
const mongoose = require("mongoose");

const getAllUsers = async (request, response) => {

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
        const usuarios = await usuarioSchema.find();
        response.status(200).json(usuarios);        
    } catch (error) {
        response.status(500).json({message: error.message});        
    }
  })  
}

const createUser = async (request, response) => {
    try {
        const usuario = new usuarioSchema({
            nome: request.body.nome,
            email: request.body.email,
            idade: request.body.idade,
            rg: request.body.rg,
            telefone: request.body.telefone,
            senha: request.body.senha,
            _id: new mongoose.Types.ObjectId()
        })

        if (usuario.nome == "" || usuario.email == "" || usuario.idade == "" || usuario.rg == "" || usuario.telefone == "" || usuario.senha == "") {
            response.status(400).json({message: "Por favor, preencha todos os campos!"});
        }

        if (usuario.idade < 18){
            response.status(404).json({message: "O usuário precisa ser maior de idade!"});
        }

        if (usuario.rg.length > 10){
            response.status(404).json({message: "Por favor, insira um RG válido!"});
        }

        if (usuario.telefone.length > 11 || usuario.telefone.length < 11){
            response.status(404).json({message: "Por favor, insira um telefone válido!"});
        }

        if (usuario.senha.length <= 4){
            response.status(404).json({message: "A senha precisa ter mais de 4 caracteres!"});
        }

        const passwordHashed = await hashPassword(usuario.senha, response);

        usuario.senha = passwordHashed;

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
        const usuarioEncontrado = await usuarioSchema.findById(request.params.id);
        
        if (usuarioEncontrado) {
            usuarioEncontrado.nome = request.body.nome || usuarioEncontrado.nome;
            usuarioEncontrado.email = request.body.email || usuarioEncontrado.email;
            usuarioEncontrado.idade = request.body.idade || usuarioEncontrado.idade;
            usuarioEncontrado.telefone = request.body.telefone || usuarioEncontrado.telefone;
            usuarioEncontrado.senha = request.body.senha || usuarioEncontrado.senha;
        }

        const passwordHashed = await hashPassword(usuarioEncontrado.senha, response);
        usuarioEncontrado.senha = passwordHashed;

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
  })  
}

const deleteUser = async (request, response) => {

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
  })  
}

const login = (request, response) => {

    usuarioSchema.findOne(({email: request.body.email}), function(erro, usuario){
  
      if (!usuario){
        return response.status(404).send(`Não existe usuário com o email ${request.body.email}`);
      }
  
      const senhaValida = bcrypt.compareSync(request.body.senha, usuario.senha);
  
      if (!senhaValida) {
        return response.status(403).send(`Senha inválida!`);
      }
  
      const token = jwt.sign({ email: request.body.email }, SECRET);
    
      return response.status(200).send({message: "Tudo certo, segue o token:", token});
  
    })  
  }


module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    login
}