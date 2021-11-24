const restful = require('node-restful')
const mongoose = restful.mongoose

const equipeSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  patrocinador: { type: String, required: true },
  jogadores: { type: Array, required: true }
})

const Equipe = restful.model('Equipe', equipeSchema)

module.exports = Equipe