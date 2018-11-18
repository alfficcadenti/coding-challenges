const assert = require("chai").assert;
const evenOccurrence = require("../src/even-occurrence");

describe("evenOccurrence", function() {
  it("should return '2' if given '[ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]'", function() {
      var ArrayTest = [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]
      var evenOcc = evenOccurrence(ArrayTest)
       assert.equal(evenOcc, 2);
  });
  it("should return 'cat' if given [ 'cat', 'dog', 'dig', 'cat' ]", function() {
      var ArrayTest = [ "cat", "dog", "dig", "cat" ]
      var evenOcc = evenOccurrence(ArrayTest)
       assert.equal(evenOcc, "cat");
  });
  it("should return null if given [ 'one', 'two', 'three' ]", function() {
      var ArrayTest = [ "one", "two", "three" ]
      var evenOcc = evenOccurrence(ArrayTest)
       assert.equal(evenOcc, null);
  });


});
