const restful = require('node-restful')
const mongoose = restful.mongoose

const equipeSchema = new mongoose.Schema({
  nome: String,
  patrocinador: String,
  jogadores: Array
})

const Equipe = restful.model('Equipe', equipeSchema)

module.exports = Equipe