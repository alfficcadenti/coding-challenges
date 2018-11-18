const assert = require("chai").assert;
const firstNonRepeatedCharacter = require("../src/nonrepeated-character");

describe("firstNonRepeatedCharacter", function() {
  it("should return 'A' if given 'ABCD'", function(done) {
       assert.equal(firstNonRepeatedCharacter("ABCD"), 'A');
       done();
  });
  it("should return 'sorry' if given 'XXXXX'", function(done) {
       assert.equal(firstNonRepeatedCharacter("XXXXX"), 'sorry');
       done();
  });
  it("should return 'L' if given 'ALABAMA'", function(done) {
       assert.equal(firstNonRepeatedCharacter("ALABAMA"), 'L');
       done();
  });
  it("should return 'sorry' if given 'BABA'", function(done) {
       assert.equal(firstNonRepeatedCharacter("BABA"), 'sorry');
       done();
  });

});
