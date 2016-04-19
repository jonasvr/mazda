var locationInterval = null;
var weatherInterval = null;
var startInterval = null;
var timeTO = 2*60*1000; // 2 minuten
var timeInterval = 3 * 60 * 1000; // 3 minuten
var startTimeOut = null;
var weatherTimeOut = null;
var timing = 1 * 10 * 1000;
// var time = 4000;



// location var
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        loadSong();
        // start();
        // $( "#play" ).bind( "tap", function(){
        //     console.log('tapped');
        //     start();
        // } );
        $(document).ready(function(){

            $("#play").click(function(){
                start();
            });
            $("#stop").click(function(){
                $("#info").html("Stopped");
                sounds.song1.stop();
                clearInterval(locationInterval);
                clearInterval(weatherInterval);
                clearInterval(startInterval);
                clearTimeOut(weatherTimeOut);
                clearTimeOut(startTimeOut);

                $.each( locations, function( key, value ) {
                    value.passed = null;
                });
                $.each( sounds, function( key, value ) {
                    value.passed = null;
                });
            });

        });


    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function start(){
    options = { enableHighAccuracy: true };
    navigator.geolocation.getCurrentPosition(onSuccessStart, onError,options); //startlocation opslaan.
    sounds.song1.play();
    locationInterval    = setInterval(currentLocation,timing);

    weatherTimeOut = setTimeout(function(){
        weatherInterval = setInterval(checkWeather,timing);
    },15000);

    startTimeOut = setTimeout(function(){
        startInterval = setInterval(checkStartLocation,timing);
    },1*60*1000);//10*60*1000

    $("#info").html("Started");
}
