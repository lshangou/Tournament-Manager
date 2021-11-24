const Torneio = require('./Torneio');
Torneio.methods(['get', 'post', 'put', 'delete']);
Torneio.updateOptions({new: true, runValidators: true});
module.exports = Torneio