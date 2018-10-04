$("#zipSearch").on("click", function(e) {
  event.preventDefault();
  var zipcode = $("#zipInput")
    .val()
    .trim();
  var APIKey = "166a433c57516f51dfab1f7edaed8413";
  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast/daily?zip=" +
    zipcode +
    ",us&units=imperial&cnt=16&appid=" +
    APIKey;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $(".city").html("<h1>" + response.city.name + " Weather Details</h1>");
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
});

// make 4 loop for days
// days have icon / temp hi and low / description / wind
