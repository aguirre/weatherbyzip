$("#weatherSearch").on("click", function(e) {
  event.preventDefault();
  var weatherZip = $("#weatherInput")
    .val()
    .trim();

  // API to get City and State by ZIP Code
  var zipURL = "https://api.zippopotam.us/us/" + weatherZip;
  $.ajax({
    url: zipURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $(".city").html(
      "<h1>" +
        response.places[0]["place name"] +
        ", " +
        response.places[0]["state abbreviation"] +
        "</h1>"
    );
  });

  // API for Weather Info by ZIP Code
  var APIKey = "166a433c57516f51dfab1f7edaed8413";
  var weatherURL =
    "https://api.openweathermap.org/data/2.5/forecast/daily?zip=" +
    weatherZip +
    ",us&units=imperial&cnt=7&appid=" +
    APIKey;
  $.ajax({
    url: weatherURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $(".icon").html(
      "<img src='https://openweathermap.org/img/w/" +
        response.list[0].weather[0].icon +
        ".png'>"
    );
    $(".weather").text(response.list[0].weather[0].description);
    $(".temp-hi").text(
      "High: " + Math.round(response.list[0].temp.max) + "° F"
    );
    $(".temp-lo").text("Low: " + Math.round(response.list[0].temp.min) + "° F");
    $(".wind").text("Wind: " + response.list[0].speed + " mph");

    // Converts Unix Timestamp to Date
    var unixConvert = moment.unix(response.list[0].dt).format("dddd, MMM D");
    console.log(unixConvert);
    $(".weatherDate").html("<h3>" + unixConvert + "</h3>");
  });
});

//! make 4 loop for days
// for (var i = 0; i < response.list[i].length; i++) {
//   var newRow = $("<tr>").append(
//     $("<td>").html("<h3>" + unixConvert + "</h3>"),
//     $("<td>").html(
//       "<img src='https://openweathermap.org/img/w/" +
//         response.list[0].weather[0].icon +
//         ".png'>"
//     ),
//     $("<td>").text(response.list[0].weather[0].description),
//     $("<td>").text("High: " + Math.round(response.list[0].temp.max) + "° F"),
//     $("<td>").text("Low: " + Math.round(response.list[0].temp.min) + "° F"),
//     $("<td>").text("Wind: " + response.list[0].speed + " mph")
//   );
//   $("#weatherRow > tbody").append(newRow);
// }
