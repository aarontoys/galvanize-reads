var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Galvanize Reads', subtitle: 'Authors' });
});

module.exports = router;