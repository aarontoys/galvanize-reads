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

function addBook (title, genre, description, cover_img) {
  return Books().insert({
    title: title,
    genre: genre,
    description: description,
    cover_img: cover_img
  });
}

module.exports = {
  getAllBooks: getAllBooks,
  getSingleBook: getSingleBook,
  addBook: addBook
}