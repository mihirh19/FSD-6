async function search() {
   ou = document.getElementById("out");

   inp = document.getElementById("inp");
   ou.innerText = ""
   data = null

   // var xhr = new XMLHttpRequest();


   // xhr.open("GET", "https://api.api-ninjas.com/v1/weather?city=" + inp.value, true)
   // xhr.setRequestHeader("X-Api-Key", "U7UqiXUupn4BmFN7sykIiw==vx7VfSZBWKVTjclj")
   // xhr.onreadystatechange = function () {
   // if (xhr.readyState == 4 && xhr.status == 200) {
   //  data = JSON.parse(xhr.responseText)
   // console.log(data["temp"])
   // ou.innerText = data["temp"]
   // }
   // }

   // xhr.send(); 
   ou.innerText = "Loading..."

   await fetch(`https://api.api-ninjas.com/v1/weather?city=${inp.value}`, {
      method: "GET",
      headers: {
         "X-Api-Key": "U7UqiXUupn4BmFN7sykIiw==vx7VfSZBWKVTjclj",
      }
   }).then(response => response.json()).then(data => {

      if (data["temp"] == undefined) {
         throw "City not found"
      }
      ou.innerText = "Temp  : " + data["temp"] + "°C" + "\n" + "Humidity  : " + data["humidity"] + "%" + "\n" + "Wind Speed  : " + data["wind_speed"] + "km/h"
   }).catch(err => {
      ou.innerText = "City not found"
   })

}
