const crypto = require('crypto');
// responsavel por se conectar com o banco de dados
const connection = require('../database/connection');

module.exports = {

    // responsavel por criar uma ong
    async create(request, response) {
        // fazendo a desistruturação dos dados recebidos.
        const { name, email, whatsapp, city, uf } = request.body;

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
    },

    // listando todas as ongs
    // geralmente se da o nome de index aos metodos que fazem esse tipo de listagem
    async index(request, response) {
        // selecionando todas as ongs
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    }
}