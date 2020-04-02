const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        const incidents = await connection('incidents').select('*');

        return response.json(incidents); 
    },

    async create(request, response){
        const { title, description, value} = request.body;
        const ong_id = request.headers.authorization;
        
        // desestruturando o array recebido. Pegando o primeiro elemento. Já que retorna um array com apenas um único elemento
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if(incidents.ong_id !== ong_id){
            return response.status(401).json({ error: 'Operation not permited.' });
        }

        await connection('incidents').where('id', id).delete();

        // 204 pois a reposta não contem corpo
        return response.status(204).send();
    }
}