$(document).ready(function() {
 getWeather();
})

function getLocation() {
 if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var whereAbouts = {lat:lat, lon:lon};
    console.log(whereAbouts);
    return whereAbouts
  });
 }
}

function getWeather() {
  getLocation();

 var retrieveData = $.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?lat=39.7003055&lon=-104.8917007&units=metric&appid=4d6648a4bbb807b27dc7b11eb91cd4d9',
  type: 'GET',
  dataType: 'jsonp',
  headers: {
            'Access-Control-Allow-Origin': '*'
   }
 });


 retrieveData.done(function(data) {

  var cityName = data.name;
  var temp = Math.round(data.main.temp) * 9/5 + 32
  var weatherDescription = data.weather[0].description;
  var weather = data.weather[0].main;
  var celsius = Math.round(data.main.temp) + '&deg; C';
  var farenheit = Math.round(data.main.temp) * 9/5 + 32 + '&deg; F';

  weatherChooser(weather);
  IconChooser(weather)

  $('#city').append(cityName);
  $('#description').append(weatherDescription);
  $('#temp').append(temp + "&deg; F");

  $('.farenheit').on('click', function () {
    $('#temp').empty().append(farenheit)
  });

  $('.celsius').on('click', function () {
    $('#temp').empty().append(celsius)
  });

  function weatherChooser(weather){
    weather = weather.toLowerCase();

    switch(weather){
      case 'Dizzle':
        IconChooser(weather)
        break;
      case 'Clouds':
        IconChooser(weather)
        break;
      case 'Rain':
        IconChooser(weather)
        break;
      case 'Snow':
        IconChooser(weather)
        break;
      case 'Clear':
        IconChooser(weather)
        break;
      case 'Thunderstom':
        IconChooser(weather)
        break;
      }
    };

    function IconChooser(weather) {
      weather = weather.toLowerCase();
      $('div.' + weather).removeClass('hide')
    };

 });
};
