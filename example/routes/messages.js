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
  res.send(`
 <!-- Include Quill stylesheet -->
<link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet">

<!-- Create the toolbar container -->
<div id="toolbar">
  <button class="ql-bold">Bold</button>
  <button class="ql-italic">Italic</button>
</div>

<!-- Create the editor container -->
<div id="editor">
  <p>Hello World!</p>
</div>

<!-- Include the Quill library -->
<script src="https://cdn.quilljs.com/1.0.0/quill.js"></script>

<!-- Initialize Quill editor -->
<script>
  var editor = new Quill('#editor', {
    modules: { toolbar: '#toolbar' },
    theme: 'snow'
  });
</script>
 `)
})
module.exports = router;
