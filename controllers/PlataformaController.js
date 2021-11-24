const Jogo = require('../models/Jogo')
const Plataforma = require('../models/Plataforma')

const plataformaController = {
  readWithGames: function(req, res) {
    let listaDePlataformas = []
    let listaDeJogos = []
    let listaDePlataformasComJogo = []
    Plataforma.find({}, function(err, docs) {
      listaDePlataformas = docs
      Jogo.find({}, function(err, docs) {
        listaDeJogos = docs
        listaDePlataformas.forEach(plataforma => {
          let plataformaComJogo = {
            id: plataforma._id,
            nome: plataforma.nome,
            jogos: []
          }
          listaDeJogos.forEach(jogo => {
            if(jogo.plataforma_id == plataforma._id) {
              plataformaComJogo.jogos.push(jogo)
            }
          })
          listaDePlataformasComJogo.push(plataformaComJogo)
        })
        res.json(listaDePlataformasComJogo)
      })
    })
  }
}

module.exports = plataformaController