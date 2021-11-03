const mongoose = require("mongoose");

const equipeSchema = new mongoose.Schema({
  nome: String,
  patrocinador: String,
  jogadores: Array
})

const Equipe = mongoose.model('Equipe', equipeSchema)

module.exports = Equipe