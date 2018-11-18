const assert = require("chai").assert;
const camelCase = require("../src/camel-case");

describe("camelCase", function() {
  it("should return 'thisIsAString' if given 'this is a string'", function(done) {
       assert.equal(camelCase("this is a string"), 'thisIsAString');
       done();
  });

  it("should return 'vacationRentalsByOwner' if given 'vacation rentals by owner'", function(done) {
       assert.equal(camelCase("vacation rentals by owner"), 'vacationRentalsByOwner');
       done();
  });

  it("should return 'supercalifragalisticexpialidocious' if given 'supercalifragalisticexpialidocious'", function(done) {
       assert.equal(camelCase("supercalifragalisticexpialidocious"), 'supercalifragalisticexpialidocious');
       done();
  });

});
