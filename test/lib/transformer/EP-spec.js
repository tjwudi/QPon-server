'use strict';


var EPTransformer = require('../../../lib/transformer/EP'),
  EP = require('../../../lib/fetcher/EP/Schema');

describe('EPTransformer', function() {
  it('should transform record', function(done) {
    EP.find({_qponProcessed: false}).count().exec().then(function(count) {
      return EPTransformer._transform();
    }).then(function() {
      return EP.find({_qponProcessed: false}).count().exec();
    }).then(function(count) {
      done();
    });
  });
});