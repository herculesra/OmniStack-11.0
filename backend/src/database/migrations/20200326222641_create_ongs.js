
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    // uf = estado da ong tamanho de 2 caracters
    table.string('uf', 2).notNullable();
  });
};

// caso algo dê errado, o metodo donw serve para apagar a tabela
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
