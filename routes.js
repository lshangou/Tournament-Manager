
const express = require('express');

const setRoutes = function(app) {

  const router = express.Router()
  app.use('/', router)

  // Index
  app.get('/', (req, res) => {
    res.render('index')
  })
  // About
  app.get('/about', (req, res) => {
    res.render('about')
  })

  // View Plataforma
  app.get('/plataforma_admin', (req, res) => {
    res.render('plataforma')
  })

  // Crud padrão com node-restful (usando services)
  const EquipeService = require('./models/EquipeService');
  EquipeService.register(router, '/equipe');
  const JogadorService = require('./models/JogadorService');
  JogadorService.register(router, '/jogador');
  const JogoService = require('./models/JogoService');
  JogoService.register(router, '/jogo');
  const plataformaService = require('./models/PlataformaService');
  plataformaService.register(router, '/plataforma');
  const TorneioService = require('./models/TorneioService');
  TorneioService.register(router, '/torneio');

  // Plataforma Custom
  const plataformaController = require('./controllers/PlataformaController')
  app.get('/plataforma_jogos', (req, res) => {
    plataformaController.readWithGames(req, res)
  })

}
module.exports = setRoutes