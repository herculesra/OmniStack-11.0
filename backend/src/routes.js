// entidade responsável por armazenar as rotas da aplicação

const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
// router param, com id do incident que quer deletar
routes.delete('/incidents/:id', IncidentController.delete);
module.exports = routes;

