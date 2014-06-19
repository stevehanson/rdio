var express = require('express');
var app = express();
require('dotenv').load();
var RdioClient = require('./app/rdio-client');

if(!process.env.RDIO_KEY || !process.env.RDIO_SECRET) {
    console.log('Error: must have environment variables RDIO_KEY and RDIO_SECRET set, or specified in .env file in project root. Exiting...');
    process.kill();
}

var ovenBitsUser = 'ovenbits';
var rdioClient = new RdioClient(process.env.RDIO_KEY, process.env.RDIO_SECRET);

app.get('/current/song', function(req, res){

  console.log('Incoming request for user: ' + req.param('text') || 'unspecified');
  var user =  req.param('text') || ovenBitsUser;

  rdioClient.getLastSongPlayed(user, function(err, result) {

    if(err) {
      res.send("Oh no! We couldn't get the last song for " + user + ". Error: " + err);
    } else {
      res.send(buildOutput(user, result));
    }

  });

});

function buildOutput(user, result) {
    if(user === ovenBitsUser) {
        return '*' + result.track + '* by *' + result.artist + '* is playing at the Oven Bits office.';
    } else {
        return '*' + user + '* is listening to *' + result.track + '* by *' + result.artist + '*.';
    }
}

var port = Number(process.env.PORT || 9000);
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});