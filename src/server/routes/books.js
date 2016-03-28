var express = require('express');
var router = express.Router();
var queries = require('../queries/book_queries');

router.get('/', function(req, res, next) {
  queries.getAllBooks()
    .then(function (books) {
       res.render('books', { 
          title: 'Galvanize Reads', 
          subtitle: 'Books',
          books: books,
        });
    })
    .catch(function (err) {
      return next(err);
    });
});

module.exports = router;