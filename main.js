$(document).ready(function() {
 getLocation();
 getWeather();
})

// var x = document.getElementById("local");
var obj = {};

function getLocation() {
 if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position);
  });
 }
}

function getWeather() {
 var retrieveData = $.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?lat=39.7003055&lon=-104.8917007&units=metric&appid=4d6648a4bbb807b27dc7b11eb91cd4d9',
  type: 'GET',
  dataType: 'JSONP'
 });

 retrieveData.done(function(data) {
  console.log(data);

  var cityName = data.name;
  var temp = Math.round(data.main.temp) * 9/5 + 32;
  var weatherDescription = data.weather[0].description;
  var whichIcon = data.weather[0].main;

  $('#city').append(cityName);
  $('#description').append(weatherDescription);
  $('#temp').append(temp + "&deg;");

 });
};
