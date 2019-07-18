

let search = document.querySelector("#searchbutton");
search.addEventListener("click", query);

function query() {
  let xhr = new XMLHttpRequest();
  let postcode = document.querySelector("#searchfield").value;
  let urlLocation = `https://api.postcodes.io/postcodes/${postcode}`;

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.responseText);
      let lat = response.result.latitude;
      let long = response.result.longitude;
      let loc = lat + long
    }
  };
  xhr.open("GET", urlLocation, true);
  xhr.send();
  console.log(loc)
}

// let search = document.querySelector("#searchbutton");
// search.addEventListener("click", query);

let policeQuery = function() {

let xhr = new XMLHttpRequest();
    let url = "https://data.police.uk/api/crimes-at-location?date=2017-02&lat=52.629729&lng=-1.131592";

    xhr.onreadystatechange = function() {
     if(xhr.readyState == 4 && xhr.status == 200) {
         let response = JSON.parse(xhr.responseText);
         let numCrimes = response.length;
         alert(numCrimes);
     }
 };
 xhr.open("GET", url, true);
 xhr.send();
}

