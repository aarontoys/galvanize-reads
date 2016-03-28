var knex = require('../../../db/knex');
var Books = function () {
  return knex('books');
};

function getAllBooks () {
  return Books();
}

function getSingleBook (id) {
  return Books().where('id', id);
}

module.exports = {
  getAllBooks: getAllBooks,
  getSingleBook: getSingleBook
}