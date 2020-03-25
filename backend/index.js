const express = require('express');

const app = express();
// criando apenas um hello word
app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack',
        aluno: 'Hércules Rodrigues',
        msg: 'Hello World!'
    })
})

app.listen(3333);