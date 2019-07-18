let results = document.querySelector(".result");

let search = document.querySelector("#searchbutton");
search.addEventListener("click", query);

function query() {
  let xhr = new XMLHttpRequest();
  let postcode = document.querySelector("#searchfield").value;
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
      crimeNum.textContent += ` ${totalCrimes}`;

      
    }
  };
  xhr.open("GET", URL, true);
  xhr.send();
};
