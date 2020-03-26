// entidade responsável por armazenar as rotas da aplicação
const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack',
        aluno: 'Hércules Rodrigues',
        msg: 'Hello World!'
    });
});

module.exports = routes;

