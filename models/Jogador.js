const restful = require('node-restful')
const mongoose = restful.mongoose
const ObjectId = mongoose.Schema.Types.ObjectId;

const jogadorSchema = new mongoose.Schema({
  nome: String,
  data_nascimento: Date,
  pais: String,
  equipe_id: ObjectId,
  torneio_id: ObjectId
})

const Jogador = restful.model('Jogador', jogadorSchema)

module.exports = Jogador