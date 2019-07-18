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
  },

  postcodeValidator: function(postcode) {
      postcode = this.removeSpaces(postcode);
      const pattern = /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$/;
      return pattern.test(postcode);
  }
};

if (typeof module !== "undefined") {
  module.exports = functions;
}
