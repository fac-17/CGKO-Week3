//These are for testing purpose only and are not used in the final product.

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
  },

  categoriesIterator: function(policeObj) {
    let uniquCats = [];
    for (let i = 0; i < policeObj.length; i++) {
      if (!uniquCats.includes(policeObj[i].category)) {
        uniquCats.push(policeObj[i].category);
      }
    }

    let numByCat = [];
    for (let i = 0; i < uniquCats.length; i++) {
      let count = 0;
      for (let j = 0; j < policeObj.length; j++) {
        if (uniquCats[i] === policeObj[j].category) {
          count++;
        }
      }
      numByCat.push(count);
      count = 0;
    }

    let objByCat = {};
    for (let i = 0; i < uniquCats.length; i++) {
      objByCat[uniquCats[i]] = numByCat[i];
    }
    return objByCat;
  }
};

if (typeof module !== "undefined") {
  module.exports = functions;
}
