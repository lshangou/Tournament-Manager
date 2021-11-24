const restful = require('node-restful')
const mongoose = restful.mongoose
const ObjectId = mongoose.Schema.Types.ObjectId;

const torneioSchema = new mongoose.Schema({
  nome: String,
  data: Date,
  premio: String,
  jogo_id: ObjectId,
  jogadores: Array
})

const Torneio = restful.model('Torneio', torneioSchema)

module.exports = Torneio