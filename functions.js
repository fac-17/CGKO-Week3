const functions = {
  test: function() {
    return "Tape is working! Hooray!";
  },

  trimSpace: function(str) {
    return str.trim();
  },

  stringify: function(input) {
    return input;
  },

  removeSpaces: function(postcode) {
    return postcode.replace(/\s/g, "");
  }
};

if (typeof module !== "undefined") {
  module.exports = functions;
}
