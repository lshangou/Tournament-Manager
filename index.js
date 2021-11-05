const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
main().catch(err => console.log(err))
async function main() {
  await mongoose.connect('mongodb+srv://tm:tm@tournamentmanager.1mtiw.mongodb.net/tm?retryWrites=true&w=majority');
}

const Equipe = require ('./models/Equipe')
const Jogador = require ('./models/Jogador')
const Jogo = require ('./models/Jogo')
const Plataforma = require('./models/Plataforma')
const Torneio = require ('./models/Torneio')

// const playstation = new Plataforma({nome: 'Playstation', jogos:['Tekken 7, Fortnite']})
// playstation.save()
// console.log(playstation.nome)

const existingModels = {
  Equipe,
  Jogador,
  Jogo,
  Plataforma,
  Torneio
}

app.get('/', (req, res) => {
  res.sendFile('./linkList.html', {root: __dirname })
})

app.get('/:resource', (req, res) => {
  let resources = existingModels[req.params.resource].find({}, function(err, docs) {
    res.send(docs)
  })
})

app.listen(port, () => {
  console.log('Tournament Manager aberto e escutando em http://localhost:' + port)
})