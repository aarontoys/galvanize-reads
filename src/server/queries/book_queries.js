var knex = require('../../../db/knex');
var Books = function () {
  return knex('books');
};

function getAllBooks () {
  return Books();
}

module.exports = {
  getAllBooks: getAllBooks,
}