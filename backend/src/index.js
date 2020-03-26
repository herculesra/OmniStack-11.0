const express = require('express');
const routes = require('./routes');

const app = express();

// informando para nossa API que as requisições serão JSON
app.use(express.json());
// usando as rotas
app.use(routes);

app.listen(3333);