'use strict';

var expect = require('chai').expect,
    rdioCreds = require('../rdio-credentials.js'), // you need to create this file! Not posting mine on github :)
    RdioClient = require('../app/rdio-client.js');

describe('RdioClient', function() {

  var rdioClient = new RdioClient(rdioCreds.key, rdioCreds.secret);
  var error, result;

  beforeEach(function(done) {
    rdioClient.getLastSongPlayed('stevehans', function(err, res) {
        error = err;
        result = res;
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