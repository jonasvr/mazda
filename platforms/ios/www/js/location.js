var maxDistance = 0.5 // => in km

// locations
var locations = {
        albert:{lat:51.193966,long: 4.411996, passed:null},
        kaai:{lat:51.218786,long:4.395486, passed:null},
        hoboken:{lat:51.173491,long:4.370421, passed:null},
        markgrave:{lat:51.199197, long:4.403349, passed:null},
};

var current = {long:null,lat:null};

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
          current.lat  = position.coords.latitude;
          current.lat  = current.lat.toFixed(6)
          current.long   = position.coords.longitude;
          current.long  = current.long.toFixed(6)
          checkLocations();
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
        $.each( locations, function( key, value ) {
            var dis = distance(current.lat,current.long,value.lat,value.long,'K');
            if (dis < .5 && value.passed == null) { //binnen bereik en is nog niet gebruikt
                $("#info").html(key + " in de buurt gevonden");
                switch (key) {
                    case 'albert':
                        fadeOut(song2.duration);
                        song2.media.play();
                        break;
                    case 'markgrave':
                        fadeOut(song3.duration);
                        song3.media.play();
                        break;
                }
                value.passed = 1;
                return false;
            }
        });
}


function locate(){ // alle ingegeven locaties
                    $.each( locations, function( key, value ) {
        var dis = distance(current.lat,current.long,value.lat,value.long,'K');
            alert(key + ' \n' + dis + ' km');
    });
}
