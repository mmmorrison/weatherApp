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
  dataType: 'JSONP',
  headers:
 });

 retrieveData.done(function(data) {
  console.log(data);
  var quote = data.quote;
  var author = data.author;
  var title = data.book;

  $('.quote, .author').empty();
  $('.quote').append(quote);
  $('.author').append(author);

 });
}

//turkey sandwich
//starburst gummies
//nos
