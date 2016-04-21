var maxDistance = 0.5 // => in km

// locations
var locations = {
        albert:{    lat:51.193966, long:4.411996, passed:null},
        kaai:{      lat:51.218786, long:4.395486, passed:null},
        hoboken:{   lat:51.173491, long:4.370421, passed:null},
        markgrave:{ lat:51.199197, long:4.403349, passed:null},
        //tankstations
        esso:{      lat:51.189387, long:4.400421},
        total:{     lat:51.188865, long:4.440305},
        esso2:{     lat:51.260049, long:4.419755},
        Meas:{      lat:51.171029, long:4.364098},

        //autogarages
        buga:{      lat:51.194775, long:4.417542},
        ranualt:{   lat:51.173402, long:4.394113},
        ford:{      lat:51.184815, long:4.390922},
        opel:{      lat:51.187206, long:4.386238},
        hyundai:{   lat:51.179374, long:4.433195},
        clear:function(){

        }

};

var current = {lat:null,long:null};
var startLocation = {lat:null, long: null, passed:null};
function currentLocation()
{
    options = { enableHighAccuracy: true };
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
}
//geolocating
// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccess = function(position) {
        // dist=distance(current.lat,current.long,position.coords.latitude.toFixed(6),position.coords.longitude.toFixed(6),'K');
        // var time = Math.floor((position.timestamp-current.time)/1000);
        // var speed = (dist / time ) * 60 *60;
        // alert('afstand: ' + dist.toFixed(4)  + ' km \n' +
        //         'time: ' + time + ' s \n'+
        //         'speed:' + speed.toFixed(4) + ' km/u');

          current.lat  = position.coords.latitude;
          current.lat  = current.lat.toFixed(6);
          current.long   = position.coords.longitude;
          current.long  = current.long.toFixed(6);
          current.time = position.timestamp;
};

var onSuccessStart = function(position) {
          startLocation.lat  = position.coords.latitude;
          startLocation.lat  = startLocation.lat.toFixed(6);
          current.lat = startLocation.lat;
          startLocation.long   = position.coords.longitude;
          startLocation.long  = startLocation.long.toFixed(6);
          current.long = startLocation.long;
};


// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}


function distance(lat1, lon1, lat2, lon2, unit) {
        var radlat1 = Math.PI * lat1/180
        var radlat2 = Math.PI * lat2/180
        var radlon1 = Math.PI * lon1/180
        var radlon2 = Math.PI * lon2/180
        var theta = lon1-lon2
        var radtheta = Math.PI * theta/180
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist)
        dist = dist * 180/Math.PI
        dist = dist * 60 * 1.1515
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        return dist;
}

// locaties vergelijken of ze in de buurt zijn..
function checkLocations(){
    // alert('checking');
    var message = 0;

        $.each( locations, function( key, value ) {
            var dis = distance(current.lat,current.long,value.lat,value.long,'K');
            if (dis < .5) { //binnen bereik en is nog niet gebruikt
                switch (key) {
                    case 'albert':
                        fadeOut(sounds.albert);
                        break;
                    case 'markgrave':
                        fadeOut(sounds.song3);
                        break;
                }
                    $("#info").html(key + " in de buurt gevonden");
                return false;
            }
        });
}

 //als we op het einde komen
function checkStartLocation(){
    var dis = distance(current.lat,current.long,startLocation.lat,startLocation.long,'K');
    if (dis < .5 && startLocation.passed == null) { //nog checken op niet gebruikt.
        fadeOut(sounds.endSound);
        $("#info").html("almost home");
    }
}

// function speedCheck(){
//     console.log('in');
//     // onSuccess Callback
//     //   This method accepts a `Position` object, which contains
//     //   the current GPS coordinates
//     //
//     function onSuccess(position) {
//         var element = document.getElementById('geolocation');
//         element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
//                             'Longitude: ' + position.coords.longitude     + '<br />' +
//                             '<hr />'      + element.innerHTML;
//     }
//
//     // onError Callback receives a PositionError object
//     //
//     function onError(error) {
//         alert('code: '    + error.code    + '\n' +
//               'message: ' + error.message + '\n');
//     }
//
//     // Options: throw an error if no update is received every 30 seconds.
//     //
//     // var watchID = GPSLocation.watchPosition(onSuccess, onError, { timeout: 3000, enableHighAccuracy: true  });
//     var geo = cordova.require('cordova/plugin/geolocation');
// geo.getCurrentPosition(win, fail,opts);
// }



function speedCheck(){
    console.log('in');
    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    function onSuccess(position) {
        dist=distance(current.lat,current.long,position.coords.latitude.toFixed(6),position.coords.longitude.toFixed(6),'K');
        var time = Math.floor((position.timestamp-current.time)/1000);
        var speed = (dist / time ) * 60 *60;
        // alert('afstand: ' + dist.toFixed(4)  + ' km \n' +
        //         'time: ' + time + ' s \n'+
        //         'speed:' + speed.toFixed(4) + ' km/u');
        var element = document.getElementById('info');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            'speed: ' + speed.toFixed(4)    + ' km/u<br />';

                            current.lat  = position.coords.latitude;
                            current.lat  = current.lat.toFixed(6);
                            current.long   = position.coords.longitude;
                            current.long  = current.long.toFixed(6);
                            current.time = position.timestamp;
                            var url = "https://mzd-jonasvr.c9users.io/tag/"+current.lat+"/"+current.long+"/"+speed;
                            console.log(url);
                            $.ajax({ //gegevens gaan ophalen
                                type:'GET',
                                url: url,
                                success:function(data){
                                    console.log(data);
                                }});

                                // var url = "http://vanreethjo.tdlinx.wtf/tags/"+current.lat+"/"+current.long;
                                // $.getJSON({ //gegevens gaan ophalen
                                //     url
                                //     });
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    // Options: throw an error if no update is received every 30 seconds.
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
}
