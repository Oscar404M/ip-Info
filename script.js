//let getH1 = document.querySelector("h1");
const get = document.querySelector("input");
const log = document.getElementById("demo");
get.addEventListener('keypress', updateValue);
function updateValue(e){
    var x = e.keyCode;
        if (x == 13) {
            if (get.value.length == 0){
                alert("Please enter the ip first");
                return }
            getData(get.value);
      }
        else {
            return false }
   }

function getData(url){
  fetch("https://ipapi.co/"+ url+ "/json/")
  .then(response => response.json())
  .then(result => { document.querySelector(".ip-address").innerText = result.ip;
                    document.querySelector('a').textContent = "Open In google map";
                    document.querySelector('a').href = "https://www.google.com/maps/place/" + result.latitude + " " + result.longitude;
                    document.querySelector('.timezone').textContent = result.timezone;
                    document.querySelector('.org').textContent = result.org; });
} 

