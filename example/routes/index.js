var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'htmx Example project' });
});

router.get('/about', function (req, res) {
  res.send(`
  Created for the Christchurch Javascript meetup. April 2021
  `)
})
module.exports = router;
