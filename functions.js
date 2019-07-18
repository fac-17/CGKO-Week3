const functions = {
    test: function() {
        return "Tape is working! Hooray!";
    },
    
    trimSpace: function(str) {
        return  str.trim();
    }
};


if (typeof module !== "undefined") {
  module.exports = functions;
}
