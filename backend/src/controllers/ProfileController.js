// Responsavel pelo perfil de uma ong

const connection = require('../database/connection');

module.exports = {
    // responsavel por retornar os casos especificos de uma unica ong.
    async index(request, response){
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return response.json(incidents);
    }
}