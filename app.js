var express = require('express');
var app = express();

app.get('/current/song', function(req, res){
  res.send('Bye Bye Bye by NSync');
});

var port = Number(process.env.PORT || 9000);

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});