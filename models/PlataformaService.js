const Plataforma = require('./Plataforma');
Plataforma.methods(['get', 'post', 'put', 'delete']);
Plataforma.updateOptions({new: true, runValidators: true});
module.exports = Plataforma