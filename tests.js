const test = require("tape");
const functions = require("./functions");

test("Testing Tape is working with 1", function(t) {
  t.equal(1, 1, "One should equal one");
  t.end();
});

test("Testing regex trims empty sapces", function(t) {
  const actual = functions.trimSpace("   NH67BG  ");
  const expected = "NH67BG";
  t.equal(actual, expected, "Should trim empty trailing spaces");
  t.end();
});

test("Testing that the output is always a string", function(t) {
  const actual = typeof functions.stringify("N98");
  const expected = typeof "";
  t.equal(actual, expected, " Should return string");
  t.end();
});

test("Testing that the output has no empty spaces inside the string", function(t) {
  const actual = functions.removeSpaces("N1 8EX");
  const expected = "N18EX";
  t.equal(actual, expected, "Should return without spaces");
  t.end();
});
