var knex = require('../../../db/knex');
var Books = function () {
  return knex('books');
};

function getAllBooks () {
  return Books()
    .whereNot('deleted', true)
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
  },'id');
}

function addBookAuthors (bookId, arr) {
  var insertPromises = arr.map(function (id) {
    return knex('books_authors').insert({
      book_id: parseInt(bookId[0]),
      author_id: id
    })
  });

  return Promise.all(insertPromises);
}

function removeBook (id) {
  return Books().where('id', id).update({deleted: true});
}

function updateBook (id, title, genre, description, cover_img) {
    return Books().where('id', id)
    .update({
      title: title,
      genre: genre,
      description: description,
      cover_img: cover_img,
  });
}

function getBookAuthors () {
  return knex('books_authors')
    .innerJoin('authors', 'books_authors.author_id', 'authors.id');
}

module.exports = {
  getAllBooks: getAllBooks,
  getSingleBook: getSingleBook,
  addBook: addBook,
  removeBook: removeBook,
  updateBook: updateBook,
  getBookAuthors: getBookAuthors,
  addBookAuthors: addBookAuthors
}