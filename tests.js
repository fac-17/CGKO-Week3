let test = require("tape");
let functions = require("./functions");

test('Testing Tape is working with 1', function (t) {
    t.equal(1, 1, 'One should equal one');
    t.end();
  });