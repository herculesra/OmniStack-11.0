// entidade responsável por armazenar as rotas da aplicação

const express = require('express');
const crypto = require('crypto');
// responsavel por se conectar com o banco de dados
const connection = require('./database/connection');

const routes = express.Router();

routes.get('/ongs', async (request, response) => {
    // selecionando todas as ongs
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);

});

routes.post('/ongs', async (request, response) => {
    // fazendo a desistruturação dos dados recebidos.
    const { name, email, whatsapp, city, uf }= request.body;
    
    const id = crypto.randomBytes(4).toString('HEX');

    // Persistindo os dados
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,   
    });

    // devolve apenas o ID, isso vai funcionar como um 'cpf' ou 'cnpj' da ong.
    return response.json({ id });
});

module.exports = routes;

