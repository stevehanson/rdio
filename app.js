var express = require('express');
var app = express();
var rdioCreds = require('./rdio-credentials.js'); // you need to create this file! Not posting mine on github :)
var RdioClient = require('./app/rdio-client');

var rdioClient = new RdioClient(rdioCreds.key, rdioCreds.secret);

app.get('/current/song', function(req, res){

  console.log('Incoming request for user: ' + req.param('text') || 'unspecified');
  var user =  req.param('text') || 'ovenbits';

  rdioClient.getLastSongPlayed(user, function(err, result) {

    if(err) {
      res.send("Oh no! We couldn't get the last song for " + user + ". Error: " + err);
    } else {
      res.send('*' + user + '* is listening to *' + result.track + '* by *' + result.artist + '*.');
    }

  });

});

var port = Number(process.env.PORT || 9000);
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});