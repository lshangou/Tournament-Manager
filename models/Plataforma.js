const mongoose = require("mongoose");

const plataformaSchema = new mongoose.Schema({
  nome: String,
  jogos: Array
})

const Plataforma = mongoose.model('Plataforma', plataformaSchema)

module.exports = Plataforma