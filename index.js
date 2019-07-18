// Police API request

var xhr = new XMLHttpRequest();
var lat = 52.629729;
var lng = -1.131592;
var date = "2017-06";
var URL = `https://data.police.uk/api/crimes-at-location?date=${date}&lat=${lat}&lng=${lng}`;

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var policeObj = JSON.parse(xhr.responseText);
    console.log(policeObj);
  }
};
xhr.open("GET", URL, true);
xhr.send();

if (typeof module !== "undefined") {
  module.exports = test;
}
