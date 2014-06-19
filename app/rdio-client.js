
var Rdio = require("node-rdio");
var rdio = new Rdio(["k78q9x9858wfexvyq5jqc9p8", "G8aNvrfwcR"]);

var RdioClient = function(clientKey, clientSecret) {
  this.rdio = new Rdio([clientKey, clientSecret]);
};

RdioClient.prototype.getLastSongPlayed = function(user, callback) {
  user = (user == null) ? 'stevehans' : user;

  return rdio.call('findUser', {
    'vanityName': user,
    'extras': 'lastSongPlayed'
  }, function(err, res) {

    console.log(err);
    console.log(res);

    if(err) {
      callback(err);
    } else {

      if(!res.result || !res.result.lastSongPlayed) {
        callback('Could not retrieve last song played');
      }

      callback(null, {
        artist: res.result.lastSongPlayed.artist,
        track: res.result.lastSongPlayed.name
      });

    }
  });

};

module.exports = RdioClient;