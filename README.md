# Projeto TM

Projeto criado por Adler Ferreira, Leonardo Dias, Lucas Menezes e Melissa Lara. É uma aplicação para gerenciamento de futuros torneios de jogos. Criado para atividade de Desenvolvimento Back-End | Cotemig

## Iniciando o Projeto

```cmd
npm install
npm start
```

## Documentação

Documentação do Projeto

### Arquivo Index

Importação do Express (Framework pra desenvolvimento Web em node) + Definição de porta:

Link da documentação do Express: [https://expressjs.com/en/4x/api.html](https://expressjs.com/en/4x/api.html)

```js
const express = require('express')
const app = express()
const port = 3000
```

Conexão com o banco de dados e inicialização do Mongo com o mongoose (ORM de auxilio do mongo no JS):

Link da documentação do Mongoose: [https://mongoosejs.com/docs](https://mongoosejs.com/docs)

```js
const mongoose = require('mongoose')
main().catch(err => console.log(err))
async function main() {
  // Essa url vem do cluster do Mongo. Criado no site, é uma hospedagem gratuita temporária do Mongo! (https://cloud.mongodb.com/v2/6182974e71064e34af74755a#clusters/connect?clusterId=TournamentManager)
  await mongoose.connect('mongodb+srv://tm:tm@tournamentmanager.1mtiw.mongodb.net/tm?retryWrites=true&w=majority');
}
```

Importação do Plataforma.js para utilizar o Model:

```js
const Plataforma = require('./models/Plataforma')

const playstation = new Plataforma({nome: 'Playstation', jogos:['Tekken 7, Fortnite']})
playstation.save()
// console.log(playstation.nome)
```

Rota de Exemplo:

```js
app.get('/', (req, res) => {
  res.send('Hello World')
})
```

Rota utilizando Controller:

```js
// Plataforma CRUD
// Importa o Controller (Veja como criar abaixo)
const plataformaController = require('./controllers/PlataformaController')
// CREATE
app.post('/plataformas', (req, res) => {
  plataformaController.create(req, res)
})
// READ
app.get('/plataformas', (req, res) => {
  plataformaController.readAll(req, res)
})
```

Inicializar o servidor depois das configurações de rota, banco etc.:

```js
app.listen(port, () => {
  console.log('Tournament Manager aberto e escutando em http://localhost:' + port)
})
```

### Criando um Model

Primeiro, um arquivo com o nome do model (Com a primeira letra maiuscula por convenção) deve ser adicional na pasta "models". Em seguida, o seu código deve segir o seguinte padrão:

```js
// Importação do Mongoose nesse arquivo
const mongoose = require("mongoose");

// Definição das suas propriedades através da função Schema
const plataformaSchema = new mongoose.Schema({
  nome: String
})

// Definição do Model utilizando o Schema
const Plataforma = mongoose.model('Plataforma', plataformaSchema)

// Exportação do Model para o restante do app poder importar.
module.exports = Plataforma
```

### Criando um Controller

Após criar um model, é necessário criar um controller para receber a rota e direcionar as operações de acordo com um model.

Assumo aqui que um model já foi criado.

Para criar um controller, um arquivo com o nome do controller (Com a primeira letra maiuscula por convenção) deve ser adicional na pasta "controllers". Em seguida, o seu código deve segir o seguinte padrão:

```js
// Importa um Model existente, para o controller atuar em cima dele
const Plataforma = require('../models/Plataforma')

// Cria um objeto que terá várias funções (Crud, operações, etc.)
const plataformaController = {
  // Exemplo de Função READ
  readAll: function(req, res) {
    // Executa a opção de Find no Banco de dados
    Plataforma.find({}, function(err, docs) {
      // Utiliza o objeto de resposta recebido do index.js para enviar os arquivos como json
      res.send(docs)
    })
  },
  // Exemplo de Função CREATE / SAVE
  create: function(req, res) {
    const playstation = new Plataforma({nome: req.body.nome, jogos: req.body.jogos})
    playstation.save()
    console.log(playstation.nome)
    res.json(playstation)
  }
  /* Outra função qualquer que poderia ser útil
  generateReports: function(req, res) {
    let relatorios = {
      chaves: [],
      plataforma: ""
    }
    Torneio.find({nome: "Torneio do Sabadão"}, function(err, docs) {
      relatorios.plataforma = docs[0].plataforma
    })
    chaves.push('chave 1 - jogador joao')
    res.json(relatorios)
  }
}
// Exporta o módulo para poder adquirir ele no index.js
module.exports = plataformaController
```

