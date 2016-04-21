
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
            console.log('start');
            start();
        });

        $("#stop").click(function(){
            stopPlaying();
        });

        $("#test").click(function(){
            forecast();
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
    console.log('in');
    $("#info").html("Started");
    options = { enableHighAccuracy: true };
    navigator.geolocation.getCurrentPosition(onSuccessStart, onError,options); //startlocation opslaan.
    sounds.song1.play();
    // wachten met zoeken naar event en daarna om bepaalde tijd zoeken naar event
    timeOut =  setTimeout(function(){
        evenInterval = setInterval(function(){
            if (pauze == 0) {
                selectEvent();
            }
        },timeInterval)
    },timeTO);

    // checken voor events die nog niet zijn afgespeeld maar wel moeten spelen
    // => !! als deze iets probeert af te spelen tijdens er iets anders bezig is gaat het weer een "var priorityTime" duren
    priorityInteval = setInterval(function(){
        $.each(sounds, function(key,value){
            if(value.priority == 1 && value.passed == null)
            {
                pauze = 1;
                fadeOut(value);
                setTimeOut(function(){pauze = 0}, timeTO);
                return false;
            }
        });
    },priorityTime);


    // events checken en ze een beurt rol geven.
    // niet steeds zelfde soort berichten
    // mogelijkheid tot manipulatie
    function selectEvent()
    {
        currentLocation();
        switch (counter%3) {
            case 0:
                currentLocation();
                break;
            case 1:
                checkWeather();
                break;
            case 2:
                checkStartLocation();
                break;
        }
            counter++;
    }
}

function stopPlaying(){
    $("#info").html("Stopped");
    sounds.song1.stop();
    clearInterval(evenInterval);
    clearInterval(priorityInteval);
    clearTimeOut(timeOut);

    $.each( locations, function( key, value ) {
        value.passed = null;
    });
    $.each( sounds, function( key, value ) {
        value.passed = null;
    });
}
