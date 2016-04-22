function checkWeather(){
    if (weatherSwitch == 1) {
        console.log('forecast');
        forecast();
            weatherSwitch = 0;
    }else {
        console.log('weatherstatus');
        weatherStatus()
          weatherSwitch = 1;
    }
}


function weatherStatus(){
    $.ajax({
        // api aanspreken en huidige situatie opvragen
          url : "http://api.wunderground.com/api/456208c8d6bbf92f/conditions/q/Belgium/Antwerp.json",
          dataType : "jsonp",
          success : function(parsed_json) {
             var weather = parsed_json['current_observation']['weather'];
             var temp_c = parsed_json['current_observation']['temp_c'];
            //  type weer aan boodschap linken
              switch(weather) {
                  case "Partly Cloudy":
                          fadeOut(sounds.weer);
                      break;
                  case "Mostly Cloudy":
                          fadeOut(sounds.weer);
                      break;
                  case "Scattered Clouds":
                          fadeOut(sounds.weer);
                      break;
                  case "Clear":
                          fadeOut(sounds.weer);
                      break;
            }
            $("#info").html("Current temperature in Antwerp is: " + temp_c + " and it is: " + weather);
          }
      });
}

function forecast(){
    //neerslag voorspelling opvragen => http://gratisweerdata.buienradar.nl/
    var url = "http://gps.buienradar.nl/getrr.php?lat="+current.lat+"&lon=" + current.long;
    $.ajax({ //gegevens gaan ophalen
        type:'GET',
        url: url,
        success:function(data){
            // console.log(data);s
            data = data.split("\n");
            $.each(data,function(i,value){
                neerslag = value.split("|");
                console.log(parseInt(neerslag[0]));
                if(parseInt(neerslag[0])>50) //kijken op zware neerslag => kan nr mm/u omzetten, kijk site
                {
                    fadeOut(sounds.weer);
                    return false;
                }
            });
        }});
}
