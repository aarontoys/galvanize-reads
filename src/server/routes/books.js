var express = require('express');
var router = express.Router();
var book_queries = require('../queries/book_queries');
var author_queries = require('../queries/author_queries');

router.get('/', function (req, res, next) {
  book_queries.getAllBooks()
    .then(function (books){
      return book_queries.getBookAuthors()
        .then(function (authors) {
          res.render('books/books', { 
            title: 'Galvanize Reads', 
            subtitle: 'Books',
            books: books,
            authors: authors
          });
        })
        .catch(function (err) {
          return next(err);
        });
    })
    .catch(function (err) {
      return next(err);
    });
});

router.get('/new', function (req, res, next) {
  author_queries.getAllAuthors()
  .then(function (authors) {
    res.render('books/new_book', {
      title: 'Galvanize Reads',
      subtitle: 'Add Book',
      authors: authors
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

router.post('/new', function (req, res, next) {
  var title = req.body.title;
  var genre = req.body.genre;
  var desc = req.body.description;
  var cover_img = req.body.cover_img;
  var authors = req.body.authors;

  // console.log('authors: ', authors);

  book_queries.addBook(title, genre, desc, cover_img)
    .then(function (id) {
      return book_queries.addBookAuthors(id, authors)
    })
    .then(function () {
      res.redirect('/books');
    })
    .catch(function (err) {
      return next(err);
    });
});

router.get('/:id', function (req, res, next) {
  book_queries.getSingleBook(req.params.id)
    .then(function (book){
      return book_queries.getBookAuthors()
        .then(function (authors) {
          res.render('books/books', { 
            title: 'Galvanize Reads', 
            subtitle: 'Single Books',
            books: book,
            authors: authors
          });
        })
        .catch(function (err) {
          return next(err);
        });
    })
    .catch(function (err) {
      return next(err);
    });
});

router.get('/edit/:id', function (req, res, next) {
  book_queries.getSingleBook(req.params.id)
    .then(function (book) {
      return author_queries.getAllAuthors()
        .then(function (authors) {
          return book_queries.getBookAuthors(req.params.id)
            .then(function (bookAuthors) {
              console.log('bookAuthors: ',bookAuthors.length);
              res.render('books/edit_book', {
                title: 'Galvanize Reads',
                subtitle: 'Edit Book',
                books: book[0],
                authors: authors,
                bookAuthors: bookAuthors
              });
            })
            .catch(function (err){
              return next (err);
            });
        })
        .catch(function (err) {
          return next(err);
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
  book_queries.updateBook(id, title, genre, desc, cover_img)
    .then(function () {
      res.redirect('/books');
    })
    .catch(function (err) {
      return next(err);
    });
});

router.get('/remove/:id', function (req, res, next) {
  book_queries.getSingleBook(req.params.id)
    .then(function (book){
        book_queries.getBookAuthors()
          .then(function (authors) {
            res.render('books/books_remove', { 
              title: 'Galvanize Reads', 
              subtitle: 'Single Books',
              books: book,
              authors: authors
            });
          })
          .catch(function (err) {
            return next(err);
          });
      })
      .catch(function (err) {
        return next(err);
      });
  // .then(function (book) {
  //   res.render('books/books_remove', {
  //     title: 'Galvanize Reads',
  //     subtitle: 'Remove Single Book',
  //     books: book
  //   });
  // })
  // .catch(function (err) {
  //   return next(err);
  // });
});

router.post('/remove/:id', function (req, res, next) {
  book_queries.removeBook(req.params.id)
    .then(function () {
      res.redirect('/books');
    })
    .catch(function (err) {
      return next(err);
    });
});

router.get('/ajax/:id', function (req, res, next) {
  book_queries.getBookAuthors(req.params.id)
    .then(function (result) {
      res.send(result);
    })
})

module.exports = router;