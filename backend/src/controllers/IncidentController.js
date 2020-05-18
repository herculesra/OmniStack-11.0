const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        // esquema de paginacao, se nao tiver, eh 1.
        const { page = 1 } = request.query;

        // sabendo o total de casos
        // [count] é o mesmo que count[0], primeiro elemento do array
        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
        .limit(5)
        .offset((page - 1) * 5)
        .select('*');

        response.header('X-Total-Count', count['count(*)']);

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