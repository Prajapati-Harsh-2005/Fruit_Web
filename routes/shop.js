var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ecommerce-cart', function(req, res, next) {
  res.render('Shop/ecommerce-cart');
});
router.get('/ecommerce-single', function(req, res, next) {
  res.render('Shop/ecommerce-single');
});
router.get('/ecommerce', function(req, res, next) {
  res.render('Shop/ecommerce');
});

module.exports = router;