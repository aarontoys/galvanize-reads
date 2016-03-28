
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function (table){
    table.increments();
    table.string('fname');
    table.string('lname');
    table.text('bio');
    table.string('img');
    table.boolean('deleted');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');
};
