var knex = require('../../../db/knex');
var Authors = function () {
  return knex('authors');
};

function getAllAuthors () {
  return Authors().whereNot('deleted', true);
}

function getSingleAuthor (id) {
  return Authors().where('id', id).andWhereNot('deleted', true);
}

function addAuthor (fname, lname, bio, img) {
  return Authors().insert({
    fname: fname,
    lname: lname,
    bio: bio,
    img: img,
    deleted: false
  });
}

function removeAuthor (id) {
  return Authors().where('id', id).update({deleted: true});
}

function updateAuthor (id, fname, lname, bio, img) {
    return Authors().where('id', id)
    .update({
      fname: fname,
      lname: lname,
      bio: bio,
      img: img,
  });
}

module.exports = {
  getAllAuthors: getAllAuthors,
  getSingleAuthor: getSingleAuthor,
  addAuthor: addAuthor,
  removeAuthor: removeAuthor,
  updateAuthor: updateAuthor
}