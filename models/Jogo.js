const restful = require('node-restful')
const mongoose = restful.mongoose
// Id de Objeto do mongo, para fazer a ligação entre plataforma e jogo.
const ObjectId = mongoose.Schema.Types.ObjectId;

const jogoSchema = new mongoose.Schema({
  nome: String,
  categoria: String,
  plataforma_id: ObjectId
})

const Jogo = restful.model('Jogo', jogoSchema)

module.exports = Jogo