var express = require('express');
var router = express.Router();
var queries = require('../queries/author_queries');

router.get('/', function (req, res, next) {
  queries.getAllAuthors()
    .then(function (authors) {
       res.render('authors/authors', { 
          title: 'Galvanize Reads', 
          subtitle: 'authors',
          authors: authors,
        });
    })
    .catch(function (err) {
      return next(err);
    });
});

router.get('/new', function (req, res, next) {
  res.render('authors/new_author', {
    title: 'Galvanize Reads',
    subtitle: 'Add Author'
  })
})

router.post('/new', function (req, res, next) {
  var fname = req.body.fname;
  var lname = req.body.lname;
  var bio = req.body.bio;
  var img = req.body.img;

  console.log(fname, lname, bio, img);

  queries.addAuthor(fname, lname, bio, img)
    .then(function () {
      res.redirect('/authors');
    })
    .catch(function (err) {
      return next(err);
    });
});

router.get('/:id', function (req, res, next) {
  queries.getSingleAuthor(req.params.id)
    .then(function (author) {
      res.render('authors/authors', {
        title: 'Galvanize Reads',
        subtitle: 'Single Author',
        authors: author
      });
    })
    .catch(function (err) {
      return next(err);
    });
});

router.get('/edit/:id', function (req, res, next) {
  queries.getSingleAuthor(req.params.id)
    .then(function (author) {
      res.render('authors/edit_author', {
        title: 'Galvanize Reads',
        subtitle: 'Edit Author',
        authors: author[0]
      });
    })
    .catch(function (err) {
      return next(err);
    });
});

router.post('/edit/:id', function (req, res, next) {
  var fname = req.body.fname;
  var lname = req.body.lname;
  var bio = req.body.bio;
  var img = req.body.img;
  var id = req.params.id;

  queries.updateAuthor(id, fname, lname, bio, img)
    .then(function () {
      res.redirect('/authors');
    })
    .catch(function (err) {
      return next(err);
    });
});

router.get('/remove/:id', function (req, res, next) {
  queries.getSingleAuthor(req.params.id)
  .then(function (author) {
    res.render('authors/authors_remove', {
      title: 'Galvanize Reads',
      subtitle: 'Remove Single Author',
      authors: author
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

router.post('/remove/:id', function (req, res, next) {
  queries.removeAuthor(req.params.id)
    .then(function () {
      res.redirect('/authors');
    })
    .catch(function (err) {
      return next(err);
    });
});

module.exports = router;