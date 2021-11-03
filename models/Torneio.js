const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const torneioSchema = new mongoose.Schema({
  nome: String,
  data: Date,
  premio: String,
  jogo_id: ObjectId,
  jogadores: Array
})

const Torneio = mongoose.model('Torneio', torneioSchema)

module.exports = Torneio