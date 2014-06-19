'use strict';

var expect = require('chai').expect,
    RdioClient = require('../app/rdio-client.js');

describe('RdioClient', function() {

  var rdioClient = new RdioClient('k78q9x9858wfexvyq5jqc9p8', 'G8aNvrfwcR');
  var error, result;

  beforeEach(function(done) {
    rdioClient.getLastSongPlayed('stevehans', function(err, res) {
        error = err;
        result = res;
        console.log(err);
        done();
      })
  })

  describe('last song played for valid user', function() {

    it('should have track', function() {
      expect(result.track).not.to.be.null;
    })

    it('should have artist', function() {
      expect(result.artist).not.to.be.null;
    })

    it('should have album art', function() {
      expect(result.albumArt).not.to.be.null;
    })

    it('should not have an error', function() {
      expect(error).to.be.null;
    })
  })


});