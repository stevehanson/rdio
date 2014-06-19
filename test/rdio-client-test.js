'use strict';

var expect = require('chai').expect,
    rdioCreds = require('../rdio-credentials.js'), // you need to create this file! Not posting mine on github :)
    RdioClient = require('../app/rdio-client.js');
require('dotenv').load();


describe('RdioClient', function() {

  var rdioClient = new RdioClient(rdioCreds.key, rdioCreds.secret);
  var error, result;

  describe('app config', function() {

    it('should have RDIO_KEY environment variable set', function() {
      console.log(process.env.RDIO_SECRET);
      expect(process.env.RDIO_KEY).to.exist;
    })

    it('should have RDIO_SECRET environment variable set', function() {
      expect(process.env.RDIO_SECRET).to.exist;
    })

  })

  describe('last song played for valid user', function() {

    beforeEach(function(done) {
      rdioClient.getLastSongPlayed('stevehans', function(err, res) {
          error = err;
          result = res;
          done();
        })
    })

    it('should have track', function() {
      console.log(result.track);
      expect(result.track).to.exist;
    })

    it('should have artist', function() {
      expect(result.artist).to.exist;
    })

    it('should have album art', function() {
      expect(result.albumArt).to.exist;
    })

    it('should not have an error', function() {
      expect(error).to.be.null;
    })
  })

  describe('last song played for invalid user', function() {

    beforeEach(function(done) {
      rdioClient.getLastSongPlayed('asdfjhwer34hjds98vhldsfjh', function(err, res) {
          error = err;
          result = res;
          done();
        })
    })

    it('should have error', function() {
      expect(error).to.exist;
    })
  })


});