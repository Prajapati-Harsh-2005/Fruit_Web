var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/blog-single', function(req, res, next) {
  res.render('Blog/blog-single');
});
router.get('/blog', function(req, res, next) {
  res.render('Blog/blog');
});

module.exports = router;