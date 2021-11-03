const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
main().catch(err => console.log(err))
async function main() {
  await mongoose.connect('mongodb+srv://tm:tm@tournamentmanager.1mtiw.mongodb.net/tm?retryWrites=true&w=majority');
}

const Plataforma = require('./models/Plataforma')

const playstation = new Plataforma({nome: 'Playstation'})
playstation.save()
console.log(playstation.nome)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log('Tournament Manager aberto e escutando em http://localhost:' + port)
})