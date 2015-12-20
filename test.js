'use strict';

require('mocha');
var fs = require('fs');
var assert = require('assert');
var tryOpen = require('./');

describe('open', function() {
  it('should export a function', function() {
    assert.equal(typeof tryOpen, 'function');
  });

  it('should open a file', function() {
    assert(typeof tryOpen('package.json', 'r') === 'number');
    assert(typeof tryOpen('fixtures/a.txt', 'r') === 'number');
  });

  it('should open a file', function() {
    var fd = tryOpen('foo.bar', 'r');
    assert(fd === false);
  });
});
