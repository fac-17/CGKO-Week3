const test = require("tape");
const functions = require("./functions");

test("Testing Tape is working with 1", function(t) {
  t.equal(1, 1, "One should equal one");
  t.end();
});

test("Testing that the output has no empty spaces inside the string", function(t) {
  const actual = functions.removeSpaces("N1 8EX");
  const expected = "N18EX";
  t.equal(actual, expected, "Should return without spaces");
  t.end();
});

test("Testing function returns object with unique categories with count", function(t) {
  const actual = functions.categoriesIterator([
    {
      "category": "other-theft",
      "location_type": "Force",
      "location": {
        "latitude": "51.545363",
        "street": {
          "id": 968149,
          "name": "On or near Petrol Station"
        },
        "longitude": "-0.133277"
      },
      "context": "",
      "outcome_status": {
        "category": "Investigation complete; no suspect identified",
        "date": "2019-01"
      },
      "persistent_id": "5715809a2dd29505023fc5ef60bad261f7b9d4b5bf1ba65419c3d97b3d2b3c3e",
      "id": 71507119,
      "location_subtype": "",
      "month": "2019-01"
    },
    {
      "category": "other-theft",
      "location_type": "Force",
      "location": {
        "latitude": "51.545363",
        "street": {
          "id": 968149,
          "name": "On or near Petrol Station"
        },
        "longitude": "-0.133277"
      },
      "context": "",
      "outcome_status": {
        "category": "Status update unavailable",
        "date": "2019-05"
      },
      "persistent_id": "6fb235a2831836f4045590af2bd935a42810fda78635fd9e2c79076f23b774d0",
      "id": 71497714,
      "location_subtype": "",
      "month": "2019-01"
    }]);
  const expected = { 'other-theft': 2 };
  t.deepEqual(actual, expected, "Testing we get object with categories and count by category");
  t.end();
});
