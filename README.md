<center><img src="./assets/api-caroneiros.jpeg" width="75%"></center>

<h1 align="center">
    <br>
    <p align="center">API Caroneiros 🚗 <p>
</h1>

## ⛔ Status
❌ Em andamento

## 📝 Apresentação

O Caroneiros 🚗 é o projeto de conclusão do Bootcamp do curso de Back-End da {Reprograma}. A ideia para construir essa aplicação surgiu a partir de uma observação sobre um problema recorrente encontrado na cidade onde resido, como também na região (Santo Amaro - BA, região do Recôncavo Baiano). <br><br>
 Essa região possui cidades geograficamente muito próximas, levando ao evento onde as pessoas comumente moram em uma cidade e trabalham/estudam em outras. Além do fato de que, por serem cidades do interior, geralmente não há tanta diversidade em opções lazer como nas grandes cidades e capitais. 
 <br><br>Outro fator importante que levou a criação desse projeto é que, apesar de ter cobertura na maioria das cidades da Bahia, grandes aplicativos como iFood, Uber, Waze Carpool, Bla Bla Car não funcionam aqui na região. Entretando, o que funcionam por aqui são aplicações feitas por desenvolvedores locais, com grande participação os usuários.<br><br>
 Observando essas questões, juntamente com a grande busca por caronas nas redes sociais (Instagram e Facebook), o Caroneiros 🚗 tem como principal objetivo juntar pessoas que precisam de caronas com quem tem para oferecer, de forma mais prática e efetiva.

 ## ➡️ Link

 - Apresentação


## ⚒️ Tecnologias

A construção do projeto contou com as seguintes tecnologias:

- [JavaScript](https://www.javascript.com/)
- [Vscode](https://code.visualstudio.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Heroku](https://dashboard.heroku.com/apps)  

### Dependências utilizadas 

- [Express](https://expressjs.com/pt-br/)
- [Cors](https://www.npmjs.com/package/cors)
- [Nodemon](https://nodemon.io/)
- [Dotenv-safe](https://www.npmjs.com/package/dotenv-safe)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)

## 🚧 Arquitetura MVC 

        |
        \--  api-caroneiros
            |   README.md
            |   .gitignore
			|	.env
			|	.env.example
            |   package-lock.json
            |   package.json
            |   server.js
            \-- node_modules
            \-- assets
            \--src
                |   app.js
                |
                ---controllers
				|
                |		anuncioController.js
                |       caronaController.js 
                |       carroController.js
				|		usuarioController.js
				|
                ---database
				|
                |		mongoConfig.js            
                |
				---helpers
				|
                |		auth.js            
                |
				---models
                |
                |		anuncioSchema.js
				|		caronaSchema.js
				|		carroSchema.js
				|		usuarioSchema.js
                |
                ---routes
                |       
                |		anuncioRoutes.js
				|		caronaRoutes.js
				|		carroRoutes.js
				|		index.js
				|		usuarioRoutes.js
                |__    

## 🔗 Funcionalidades 

* Cadastrar: usuário, carro e anúncio e a carona (viagem).

* Buscar: Todos anúncios de caronas estão disponíveis, com os seguintes filtros: anúncio por ID, se há espaço na mala, se aceita transportar animais e se há possibilidade de transportar crianças no assento próprio para elas.

* Atualizar e deletar usuários, carros e anúncios e caronas, com permissão da autenticação.

## ➡️ Features e rotas

## ⚠️ Implementações futuras
* Fazer buscas mais refinadas
* Fazer buscas no banco de dados para cadastros
* Implementar canal de mensagem entre quem oferece e quem busca a carona
* Deixar comentários e likes/dislikes sobre o motorista e a viagem
* Opção de dividir gasolina
* Opção de caronas para encomendas

## 🗣️ Agradecimentos

## 📢 Fale comigo

* [Linkedin](https://www.linkedin.com/in/%C3%A9rika-de-freitas-b63331ba/) <br>
* [Telegram](https://t.me/erikafreitas47)
