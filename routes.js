
const express = require('express');

const setRoutes = function(app) {

  const router = express.Router()
  app.use('/', router)

  // Crud padrão com node-restful (usando services)
  const plataformaService = require('./models/PlataformaService');
  plataformaService.register(router, '/plataforma');

  // Plataforma Custom
  const plataformaController = require('./controllers/PlataformaController')
  app.get('/plataformas', (req, res) => {
    plataformaController.readAll(req, res)
  })

}
module.exports = setRoutes