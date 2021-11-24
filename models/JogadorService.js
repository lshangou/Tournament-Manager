const Jogador = require('./Jogador');
Jogador.methods(['get', 'post', 'put', 'delete']);
Jogador.updateOptions({new: true, runValidators: true});
module.exports = Jogador