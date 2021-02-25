// $.ajax({
//     url: "http://localhost:3000/api/v1/stats/001",
//     // Handle as Text
//     dataType: "text",
//     success: function(data) {
//         // Parse JSON file
//         var json = $.parseJSON(data);
//         //Store data into a variable
//         // Display Players
//         $('#results').html("Data: " + json);;
//     }
// });

var url = "http://localhost:3000/api/v1/stats/001";

$.ajax({
  method: "GET",
  cache: false,
  url: url,
  success: function(data) {
    result = JSON.stringify(data, null, 1)
    document.getElementById('results').innerHTML = result;
  },
  error: function(error) {
    //What do you want to do with the error?
  },
});