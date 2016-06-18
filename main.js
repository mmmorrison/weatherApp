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
  // console.log(data);
  console.log(data.weather[0].description);
  // console.log(tempX);
  // console.log(description);
  var location = data.name;
  var tempX = data.weather[0].description;
  var title = data.book;

  $('#city').append(location);
  $('#description').append(tempX);

 });
}

//turkey sandwich
//starburst gummies
//nos
