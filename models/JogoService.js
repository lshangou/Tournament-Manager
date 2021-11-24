const Jogo = require('./Jogo');
Jogo.methods(['get', 'post', 'put', 'delete']);
Jogo.updateOptions({new: true, runValidators: true});
module.exports = Jogo