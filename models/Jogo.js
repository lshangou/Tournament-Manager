const restful = require('node-restful')
const mongoose = restful.mongoose

const jogoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  categoria: { type: String, required: true },
  plataforma_id: { type: String, required: true }
})

const Jogo = restful.model('Jogo', jogoSchema)

module.exports = Jogo