$(document).ready(function() {
 getLocation();
 // getWeather();
})

var x = document.getElementById("local");

function getLocation() {
 if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
   $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  });
 }

 //  $("#local").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);


}





function getWeather() {
 var retrieveData = $.ajax({
  url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=4d6648a4bbb807b27dc7b11eb91cd4d9',
  type: 'GET',
  dataType: 'json',
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
