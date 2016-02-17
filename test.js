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
    assert.equal(typeof tryOpen('package.json', 'r'), 'number');
    assert.equal(typeof tryOpen('fixtures/a.txt', 'r'), 'number');
  });

  it('should return false if a file does not exist when a flag is passed', function() {
    var fd = tryOpen('foo.bar', 'r');
    assert.equal(fd, false);
  });

  it('should return false if a file does not exist when no flags are passed', function() {
    var fd = tryOpen('foo.bar');
    assert.equal(fd, false);
  });
});
