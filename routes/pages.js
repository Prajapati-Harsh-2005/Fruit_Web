var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/coming-soon', function(req, res, next) {
  res.render('Pages/coming-soon');
});
router.get('/email-template', function(req, res, next) {
  res.render('Pages/email-template');
});

router.get('/error', function(req, res, next) {
  res.render('Pages/error');
});

router.get('/faq', function(req, res, next) {
  res.render('Pages/faq');
});

router.get('/gallery', function(req, res, next) {
  res.render('Pages/gallery');
});

router.get('/login', function(req, res, next) {
  res.render('Pages/login');
});

router.get('/search-results', function(req, res, next) {
  res.render('Pages/search-results');
});
router.get('/signup', function(req, res, next) {
  res.render('Pages/signup');
});

router.get('/team', function(req, res, next) {
  res.render('Pages/team');
});

router.get('/timeline', function(req, res, next) {
  res.render('Pages/timeline');
});
module.exports = router;