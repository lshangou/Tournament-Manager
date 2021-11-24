const restful = require('node-restful')
const mongoose = restful.mongoose

const plataformaSchema = new mongoose.Schema({
  nome: String,
  jogos: Array
})

const Plataforma = restful.model('Plataforma', plataformaSchema)

module.exports = Plataforma