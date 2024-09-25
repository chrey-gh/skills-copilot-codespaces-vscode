//create a web server
//create a route that sends back a list of comments
//create a route that adds a new comment to the list
//create a route that deletes a comment from the list

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var comments = [
  'This is the first comment',
  'This is the second comment',
  'This is the third comment'
];

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  var comment = req.body.comment;
  
  comments.push(comment);
  res.json(comment);
});

app.delete('/comments', function(req, res) {
  var comment = req.body.comment;
  var index = comments.indexOf(comment);
  comments.splice(index, 1);
  res.json(comment);
});

app.listen(3000);
console.log('Server started on port 3000');