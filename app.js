var express = require('express');
var app = express();

app.get('/current/song', function(req, res){
  res.send('Bye Bye Bye by NSync');
});

var server = app.listen(9000, function() {
    console.log('Listening on port %d', server.address().port);
});