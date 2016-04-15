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
                        if (song2.passed == null) {
                            fadeOut(song2.duration);
                            song2.media.play();
                            song2.passed = 1;
                        }
                      break;
                  case "Mostly Cloudy":
                      if (song3.passed == null) {
                          fadeOut(song3.duration);
                          song3.media.play();
                          song3.passed = 1;
                      }
                      break;
                  case "Scattered Clouds":
                      if (song3.passed == null) {
                          fadeOut(song3.duration);
                          song3.media.play();
                          song3.passed = 1;
                      }
                      break;
            }
          }
      });
}
