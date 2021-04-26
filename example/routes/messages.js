var express = require('express');
var router = express.Router();

const allMessages = [];

router.get("/", function (req, res) {
  res.render('messages', {
    allMessages
  })
})
/* Create a new message */
router.post('/new', function(req, res, next) {
  if (!req.body.content) {
    res.status(400);
    res.send("ERROR: must include content of post")
    return;
  }
  allMessages.push(req.body.content)
  res.render('message', {content: req.body.content})
});

router.get('/new', function(req, res) {
  res.render('edit', {})
})
module.exports = router;
