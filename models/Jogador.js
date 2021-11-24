const restful = require('node-restful')
const mongoose = restful.mongoose

const jogadorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  data_nascimento: { type: Date, required: true },
  pais: { type: String, required: true },
  equipe_id: { type: String, required: true },
  torneio_id: { type: String, required: true }
})

const Jogador = restful.model('Jogador', jogadorSchema)

module.exports = Jogador