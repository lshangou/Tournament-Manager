const Equipe = require('./Equipe');
Equipe.methods(['get', 'post', 'put', 'delete']);
Equipe.updateOptions({new: true, runValidators: true});
module.exports = Equipe