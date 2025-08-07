var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/single', function(req, res, next) {
  res.render('Single-Pages/single');
});
router.get('/team-single', function(req, res, next) {
  res.render('Single-Pages/team-single');
});

module.exports = router;