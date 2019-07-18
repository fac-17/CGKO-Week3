const test = require("tape");
const functions = require("./functions");

test('Testing Tape is working with 1', function (t) {
    t.equal(1, 1, 'One should equal one');
    t.end();
  });

  test("Testing regex trims empty sapces", function(t) {
    const actual = functions.trimSpace("   NH67BG  ");
    const expected = "NH67BG";
    t.equal(actual, expected, "Should trim empty trailing spaces");
    t.end();
  })