const bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

router.post('/', function(req, res, next) {
	res.render('index', {test : req.body.test})
})

module.exports = router;
