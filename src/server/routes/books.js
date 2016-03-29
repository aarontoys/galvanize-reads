var express = require('express');
var router = express.Router();
var queries = require('../queries/book_queries');

router.get('/', function (req, res, next) {
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

router.get('/new', function (req, res, next) {
  res.render('new_book', {
    title: 'Galvanize Reads',
    subtitle: 'Add Book'
  })
})

router.post('/new', function (req, res, next) {
  var title = req.body.title;
  var genre = req.body.genre;
  var desc = req.body.description;
  var cover_img = req.body.cover_img;

  queries.addBook(title, genre, desc, cover_img)
    .then(function () {
      res.redirect('/books');
    })
    .catch(function (err) {
      return next(err);
    });
});

router.get('/:id', function (req, res, next) {
  queries.getSingleBook(req.params.id)
    .then(function (book) {
      res.render('books', {
        title: 'Galvanize Reads',
        subtitle: 'Single Book',
        books: book
      });
    })
    .catch(function (err) {
      return next(err);
    });
});

router.get('/edit/:id', function (req, res, next) {
  queries.getSingleBook(req.params.id)
    .then(function (book) {
      res.render('edit_book', {
        title: 'Galvanize Reads',
        subtitle: 'Edit Book',
        books: book[0]
      });
    })
    .catch(function (err) {
      return next(err);
    });
});

router.post('/edit/:id', function (req, res, next) {
  var title = req.body.title;
  var genre = req.body.genre;
  var desc = req.body.description;
  var cover_img = req.body.cover_img;
  var id = req.params.id;

  console.log(id, title);
  queries.updateBook(id, title, genre, desc, cover_img)
    .then(function () {
      res.redirect('/books');
    })
    .catch(function (err) {
      return next(err);
    });
});

router.get('/remove/:id', function (req, res, next) {
  queries.getSingleBook(req.params.id)
  .then(function (book) {
    res.render('books_remove', {
      title: 'Galvanize Reads',
      subtitle: 'Remove Single Book',
      books: book
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

router.post('/remove/:id', function (req, res, next) {
  queries.removeBook(req.params.id)
    .then(function () {
      res.redirect('/books');
    })
    .catch(function (err) {
      return next(err);
    });
});

module.exports = router;