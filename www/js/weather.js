function checkWeather(){
    // var weather = null;
    // var temp_c = null;
    // console.log('in weer');
    $.ajax({
          url : "http://api.wunderground.com/api/456208c8d6bbf92f/conditions/q/Belgium/Antwerp.json",
          dataType : "jsonp",
          success : function(parsed_json) {
              console.log('weather update');
             var weather = parsed_json['current_observation']['weather'];
             var temp_c = parsed_json['current_observation']['temp_c'];
             var message = 0;
              switch(weather) {
                  case "Partly Cloudy":
                          fadeOut(sounds.weer);
                          message = 1;
                      break;
                  case "Mostly Cloudy":
                          fadeOut(sounds.weer);
                          message = 1;
                      break;
                  case "Scattered Clouds":
                          fadeOut(sounds.weer);
                          message = 1;
                      break;
                  case "Clear":
                          fadeOut(sounds.weer);
                          message = 1;
                      break;
            }
            if (message) {
                $("#info").html("Current temperature in Antwerp is: " + temp_c + " and it is: " + weather);
            }
          }
      });
}
