
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.string('fname');
    table.string('lname');
    table.string('email');
    table.string('pword');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
