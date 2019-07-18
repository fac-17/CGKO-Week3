//Validation function
function postcodeValidator(postcode) {
  postcode = this.removeSpaces(postcode);
  const pattern = /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$/;
  return pattern.test(postcode);
}
//Remove spaces from postcode
function removeSpaces(postcode) {
  return postcode.replace(/\s/g, "");
}

let results = document.querySelector(".result");

let search = document.querySelector("#searchbutton");
search.addEventListener("click", query);

function query() {
  let postcode = document.querySelector("#searchfield").value;

  if (postcodeValidator(postcode)) {
    postcode = removeSpaces(postcode);
    let xhr = new XMLHttpRequest();
    let urlLocation = `https://api.postcodes.io/postcodes/${postcode}`;

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        var lat = response.result.latitude;
        var long = response.result.longitude;
        policeAPI(lat, long);
      }
    };
    xhr.open("GET", urlLocation, true);
    xhr.send();
  } else {
    alert("Please, enter a valid postcode, e.g. SW1A 1AA");
  }
}

// / Police API

let policeAPI = function(la, lo) {
  var xhr = new XMLHttpRequest();
  var URL = `https://data.police.uk/api/crimes-at-location?date=2019-01&lat=${la}&lng=${lo}`;

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var policeObj = JSON.parse(xhr.responseText);
      console.log(policeObj);
      let totalCrimes = policeObj.length;

      let resultsSection = document.createElement("span");
      results.appendChild(resultsSection);
      let crimeNum = document.querySelector(".numberOfCrimes");
      crimeNum.textContent = `Number of crimes: ${totalCrimes}`;
    }
  };
  xhr.open("GET", URL, true);
  xhr.send();
};
