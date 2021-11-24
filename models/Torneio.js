const restful = require('node-restful')
const mongoose = restful.mongoose

const torneioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  data: { type: Date, required: true },
  premio: { type: String, required: true },
  jogo_id: { type: String, required: true },
  jogadores: { type: Array, required: true }
})

const Torneio = restful.model('Torneio', torneioSchema)

module.exports = Torneio