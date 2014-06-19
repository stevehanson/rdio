var express = require('express');
var app = express();
var RdioClient = require('./app/rdio-client');


var rdioClient = new RdioClient('k78q9x9858wfexvyq5jqc9p8', 'G8aNvrfwcR');


app.get('/current/song', function(req, res){

  console.log('command is: ' + req.param('text'));
  var user =  req.param('text') || 'stevehans';

  rdioClient.getLastSongPlayed(user, function(err, result) {

    if(err) {
      res.send("Oh no! We couldn't get the last song for " + user + ". Error: " + err);
    }

    console.log(result);
    res.send('*' + user + '* is listening to *' + result.track + '* by *' + result.artist + '*. // ' + result.albumArt + ')');

  });

});

var port = Number(process.env.PORT || 9000);
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});