
var rdioCreds = require('../rdio-credentials.js'); // you need to create this file! Not posting mine on github :)
var Rdio = require("node-rdio");

var RdioClient = function(clientKey, clientSecret) {
  this.rdio = new Rdio([clientKey, clientSecret]);
};

RdioClient.prototype.getLastSongPlayed = function(user, callback) {
  user = (user == null) ? 'stevehans' : user;

  return this.rdio.call('findUser', {
    'vanityName': user,
    'extras': 'lastSongPlayed'
  }, function(err, res) {

    if(err) {
      callback(err);
    } else {

      if(!res.result || !res.result.lastSongPlayed) {
        callback('Could not retrieve last song played');
      }

      var song = res.result.lastSongPlayed;

      callback(null, {
        artist: song.artist,
        track: song.name,
        albumArt: song.icon
      });

    }
  });

};

module.exports = RdioClient;