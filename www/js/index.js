var eventInterval = null;
var timeOut = null;
var timeTO = 2*60*1000; // 2 minuten
var timeInterval = 3 * 60 * 1000; // 3 minuten
var timing = 1 * 10 * 1000;
// var time = 4000;

counter=3;


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
        // var watchID = navigator.accelerometer.watchAcceleration(onSuccessAccel, onErrorAccel, optionsAccel);
        // console.log(watchID);
        $("#play").click(function(){
            start();
        });
        $("#accel").click(function(){
            test();
            var watchID = navigator.accelerometer.watchAcceleration(onSuccessAccel, onErrorAccel, optionsAccel);
        });
        $("#stop").click(function(){
            $("#info").html("Stopped");
            sounds.song1.stop();
            clearInterval(evenIntervel);
            clearTimeOut(timeOut);

            $.each( locations, function( key, value ) {
                value.passed = null;
            });
            $.each( sounds, function( key, value ) {
                value.passed = null;
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
    timeOut =  setTimeout(function(){
        evenIntervel = setInterval(function(){
            selectEvent();
        },10000)
    },1000);


    $("#info").html("Started");
    function selectEvent()
    {
        currentLocation();
        // switch (counter%3) {
        //     case 0:
        //         currentLocation();
        //         break;
        //     case 1:
        //         checkWeather();
        //         break;
        //     case 2:
        //         checkStartLocation();
        //         break;
        // }
        //     counter++;
    }
}
