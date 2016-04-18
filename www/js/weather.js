function checkWeather(){
    // var weather = null;
    // var temp_c = null;
    // console.log('in weer');
    $.ajax({
          url : "http://api.wunderground.com/api/456208c8d6bbf92f/conditions/q/Belgium/Antwerp.json",
          dataType : "jsonp",
          success : function(parsed_json) {
             var weather = parsed_json['current_observation']['weather'];
             var temp_c = parsed_json['current_observation']['temp_c'];
             $("#info").html("Current temperature in Antwerp is: " + temp_c + " and it is: " + weather);
            //   alert();
              switch(weather) {
                  case "Partly Cloudy":
                            fadeOut(sound.song2);
                      break;
                  case "Mostly Cloudy":
                          fadeOut(sound.song3);
                      break;
                  case "Scattered Clouds":
                          fadeOut(sound.song3);
                      break;
                  case "Clear":
                          fadeOut(sound.weer);
                      break;
            }
          }
      });
}
