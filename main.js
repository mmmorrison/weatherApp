$(document).ready(function() {
 getLocation();
 getWeather();
})

var x = document.getElementById("local");

function getLocation() {
 if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
   $("#local").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  });
 }
}

function getWeather() {
 var retrieveData = $.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=4d6648a4bbb807b27dc7b11eb91cd4d9',
  type: 'GET',
  dataType: 'JSONP'
 });

 retrieveData.done(function(data) {
  console.log(data.sys.country);
  var cityName = data.name;
  var temp = Math.round(data.main.temp);
  var weatherDescription = data.weather[0].description;

  $('#city').append(cityName);
  $('#description').append(weatherDescription);
  $('#temp').append(temp + "&deg;");

 });
}

//turkey sandwich
//starburst gummies
//nos
