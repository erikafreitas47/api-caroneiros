<h1 align="center">
  <img src="./assets/api-caroneiros.jpeg" width="350">
<p align="center"><p>
</h1>

<h1 align="center">
    <br>
    <p align="center">API Caroneiros 🚗 <p>
</h1>

## ⛔ Status
❌ Em andamento

## 📝 Apresentação

<p align="justify"> O Caroneiros 🚗 é o fruto do projeto de conclusão do Bootcamp do curso de Back-End da {Reprograma}, com a orientação da professora Paula Allemand. A ideia para construir essa aplicação surgiu a partir de uma observação sobre um problema recorrente encontrado na cidade onde resido, como também na região (Santo Amaro - BA, região do Recôncavo Baiano). <br>

<p align="justify"> Essa região possui cidades geograficamente muito próximas, levando ao evento onde as pessoas comumente moram em uma cidade e trabalham/estudam em outras. Além do fato de que, por serem cidades do interior, geralmente não há tanta diversidade em opções lazer como nas grandes cidades e capitais. Com isso, a procura por caronas entre as cidades vem aumentando progressivamente.

<p align="justify"> Outro fator importante que levou a criação desse projeto é que, apesar de ter cobertura na maioria das cidades da Bahia, grandes aplicativos como iFood, Uber, Waze Carpool, Bla Bla Car não funcionam aqui na região. Entretando, o que funcionam por aqui são aplicações feitas por desenvolvedores locais, com grande participação os usuários.
<p align="justify"> Observando essas questões, juntamente com a grande busca por caronas nas redes sociais (stories no Instagram e grupos no Facebook), o Caroneiros 🚗 tem como principal objetivo juntar pessoas que precisam de caronas com quem tem para oferecer, de forma mais prática e efetiva.

 ## ➡️ Link

 - Apresentação

## 📚 Aprendizados

O projeto final é uma API Rest fundamentada no método CRUD, que são: Create (criar), Read (leitura), Update (atualizar), Delete (deletar).


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

* Buscar/Listar: Todos anúncios de caronas estão disponíveis, com os seguintes filtros: anúncio por ID, se há espaço na mala, se aceita transportar animais e se há possibilidade de transportar crianças no assento próprio para elas.

* Atualizar e deletar usuários, carros e anúncios e caronas, com permissão da autenticação.

## ➡️ Rotas

- Local: http://localhost:9090

- Heroku: Link Heroku

- Utilize o Postman ou Insomnia para realizar as chamadas e testar os endpoints da API localmente ou via Heroku.

## 🔃 Manipulação da Rota de Apresentação:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          |      `/`                | Retorna página de apresentação do projeto


## 🔃 Manipulação das Rotas de Usuários:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/usuarios/todos`       | Retorna todos os usuários            |
| POST         | `/usuarios/criar`       | Cria/cadastra um novo usuário        |
| POST         | `/usuarios/login`       | Login de usuario                     |
| PATCH        | `/usuarios/atualizar/:id`| Atualiza informações do usuario     |
| DELETE       | `/usuarios/deletar/:id` | Deleta usuário                       |

## 🔃 Manipulação das Rotas de Anuncios:

| Método HTTP  | Endpoint                | Descrição                               |
| ------------ | ----------------------- | --------------------------------------- |
| GET          | `/anuncios/todos`       | Retorna todos os anuncios               |
| GET          | `/anuncios/filtros`     | Retorna anuncios por filtros específicos|
| GET          | `/anuncios/:id`         | Retorna anuncio por ID                  |
| POST         | `/anuncios/criar`       | Cria/cadastra um novo anuncios          |
| PATCH        | `/anuncios/atualizar/:id`| Atualiza informações do anuncio        |
| DELETE       | `/anuncios/deletar/:id` | Deleta anuncio                          |


## 🔃 Manipulação das Rotas de Carros:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/carros/todos`         | Retorna todos os carros              |
| POST         | `/carros/criar`         | Cria/cadastra um novo carro          |
| PATCH        | `/carros/atualizar/:id` | Atualiza informações do carro        |
| DELETE       | `/carros/deletar/:id`   | Deleta carro                         |


## 🔃 Manipulação das Rotas de Caronas:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/caronas/todas`        | Retorna todos as caronas             |
| POST         | `/caronas/criar`        | Cria/cadastra uma nova carona        |
| PATCH        | `/caronas/atualizar/:id`| Atualiza informações da carona       |
| DELETE       | `/caronas/deletar/:id`  | Deleta carona                        |


## ⚠️ Implementações futuras
* Fazer buscas mais refinadas
* Fazer buscas no banco de dados para cadastros
* Implementar canal de mensagem entre quem oferece e quem busca a carona
* Deixar comentários e likes/dislikes sobre o motorista e a viagem
* Opção de dividir gasolina
* Opção de caronas para encomendas

## 🗣️ Agradecimentos

<p align="justify"> Agradeço a toda equipe da Reprograma. Entrar para esse curso foi, sem dúvidas, uma das maiores alegrias desse ano. Além de ser uma grande esperança de melhorias no futuro. Agradeço à todas as professoras que tive durante as semanas do curso. Conheci tantas mulheres incríveis que, com certeza, me inspiraram a seguir e aprender mais. A nossa querida facilitadora, as nossas monitoras sempre presentes, e principalmente as minhas colegas de turma. Essas mulheres incríveis que com certeza acompanharei para o resto da vida. Passar esses meses ao lado dessas mulheres foi uma experiência incrível de empatia e solidariedade. Eu tenho certeza que nunca esquecerei de nenhuma. Agradeço demais a minha família, por me incentivar a voltar para os estudos e possibilitar que isso acontecesse. Agradeço a cada amigo que torceu e vibrou comigo cada pequena conquista nos códigos. Agradeço também a mim, pois não foram meses fáceis e precisei de muita determinação para seguir. Daqui para frente, lembrarei de tudo isso. ❤️

## 📢 Fale comigo

<img src="./assets/erika.jpg" width="150">

* [Linkedin](https://www.linkedin.com/in/%C3%A9rika-de-freitas-b63331ba/) 
* [Telegram](https://t.me/erikafreitas47)

## 🖋️ Licença
