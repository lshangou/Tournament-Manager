const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true, limit: "2mb"})) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'ejs');

const mongoose = require('mongoose')
main().catch(err => console.log(err))
async function main() {
  await mongoose.connect('mongodb+srv://tm:tm@tournamentmanager.1mtiw.mongodb.net/tm?retryWrites=true&w=majority');
}

// Importação temporária para testes
const Equipe = require ('./models/Equipe')
const Jogador = require ('./models/Jogador')
const Jogo = require ('./models/Jogo')
const Plataforma = require('./models/Plataforma')
const Torneio = require ('./models/Torneio')

// const playstation = new Plataforma({nome: 'Playstation', jogos:['Tekken 7, Fortnite']})
// playstation.save()
// console.log(playstation.nome)

// Objeto de referência para usar na rota de recurso temporária
const existingModels = {
  Equipe,
  Jogador,
  Jogo,
  Plataforma,
  Torneio
}

// // ! Rota para receber recurso temporária para testes
// app.get('/:resource', (req, res) => {
//   let resources = existingModels[req.params.resource].find({}, function(err, docs) {
//     res.send(docs)
//   })
// })

const setRoutes = require('./routes')
setRoutes(app)


app.listen(port, () => {
  console.log('Tournament Manager aberto e escutando em http://localhost:' + port)
})