$("#weatherSearch").on("click", function(e) {
  event.preventDefault();
  var weatherZip = $("#weatherInput")
    .val()
    .trim();

  // API For Weather Info
  var APIKey = "166a433c57516f51dfab1f7edaed8413";
  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast/daily?zip=" +
    weatherZip +
    ",us&units=imperial&cnt=16&appid=" +
    APIKey;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $(".icon").html(
      "<img src='http://openweathermap.org/img/w/" +
        response.list[0].weather[0].icon +
        ".png'>"
    );
    $(".weather").text("Weather: " + response.list[0].weather[0].description);
    $(".temp-hi").text("High: " + response.list[0].temp.max + " F");
    $(".temp-lo").text("Low: " + response.list[0].temp.min + " F");
    $(".humidity").text("Humidity: " + response.list[0].humidity);
    $(".wind").text("Wind Speed: " + response.list[0].speed);
  });

  // API to get City name by ZIP Code
  var queryURL2 = "http://api.zippopotam.us/us/" + weatherZip;
  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $(".city").html(
      "<h1>" + response.places[0]["place name"] + " Weather Details</h1>"
    );
  });
});

// make 4 loop for days
