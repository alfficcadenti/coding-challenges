const assert = require("chai").assert;
const firstNonRepeatedCharacter = require("../src/nonrepeated-character");

describe("firstNonRepeatedCharacter", function() {
  it("should return 'A' if given 'ABCD'", function() {
       assert.equal(firstNonRepeatedCharacter("ABCD"), 'A');
  });
  it("should return 'sorry' if given 'XXXXX'", function() {
       assert.equal(firstNonRepeatedCharacter("XXXXX"), 'sorry');
  });
  it("should return 'L' if given 'ALABAMA'", function() {
       assert.equal(firstNonRepeatedCharacter("ALABAMA"), 'L');
  });
  it("should return 'sorry' if given 'BABA'", function() {
       assert.equal(firstNonRepeatedCharacter("BABA"), 'sorry');
  });

});
