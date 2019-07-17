const env = require("env2")("./env.json");

console.log(process.env.DB_KEY);

    function query() {

    let search = document.getElementById("searchbutton");
    search.addEventListener("click", query);
    let xhr = new XMLHttpRequest();
    let keyword = document.getElementById("searchfield").value;

        let regex = keyword.trim();
        keyword = regex.replace(/ /g, "+");


    let apiKey = process.env.DB_KEY;
    let url = `https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${DB_KEY}`;

    xhr.onreadystatechange = function() {
     if(xhr.readyState == 4 && xhr.status == 200) {
         let response = JSON.parse(xhr.responseText);
        console.log(response);
         let result = document.createElement("span");
         let form = document.querySelector(".search");
         form.appendChild(result);
         result.textContent = response;
     }
 };
 xhr.open("GET", url, true);
 xhr.send();
}