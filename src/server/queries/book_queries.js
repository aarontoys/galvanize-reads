var knex = require('../../../db/knex');
var Books = function () {
  return knex('books');
};

function getAllBooks () {
  return Books().whereNot('deleted', true);
}

function getSingleBook (id) {
  return Books().where('id', id).andWhereNot('deleted', true);
}

function addBook (title, genre, description, cover_img) {
  return Books().insert({
    title: title,
    genre: genre,
    description: description,
    cover_img: cover_img,
    deleted: false
  });
}

function removeBook (id) {
  return Books().where('id', id).update({deleted: true});
}

module.exports = {
  getAllBooks: getAllBooks,
  getSingleBook: getSingleBook,
  addBook: addBook,
  removeBook: removeBook
}