const Plataforma = require('../models/Plataforma')

const plataformaController = {
  readAll: function(req, res) {
    Plataforma.find({}, function(err, docs) {
      res.send(docs)
    })
  },
  create: function(req, res) {
    const playstation = new Plataforma({nome: req.body.nome, jogos: req.body.jogos})
    playstation.save()
    console.log(playstation.nome)
    res.json(playstation)
  }
}

module.exports = plataformaController