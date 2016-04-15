var locationInterval = null;
var weatherInterval = null;
var timeTO = 2*60*1000; // 2 minuten
var timeInterval = 3 * 60 * 1000; // 3 minuten
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
        song1.play();
        locationInterval = setInterval(currentLocation,10000);
        setTimeout(function(){
            weatherInterval = setInterval(checkWeather,10000);
        },15000);
        $("#info").html("Started");
        $("#load").click(function(){
            loadSongs();
        });
        $("#play").click(function(){
            song1.play();
            locationInterval = setInterval(currentLocation,10000);
            setTimeout(function(){
                weatherInterval = setInterval(checkWeather,10000);
            },15000);
            $("#info").html("Started");
        });
        $("#play2").click(function(){
            $("#info").html('test song');
            fadeOut(song2.duration);
            song2.media.play();
            console.log(song2.media.statusCallback());
        });
        $("#stop").click(function(){
            song1.stop();
            clearInterval(locationInterval);
            clearInterval(weatherInterval);
        });
        $("#dim").click(function(){
            volume -=0.1;
               song1.setVolume(volume);

            console.log('dim');
        });
        $("#up").click(function(){
            volume +=0.1;
               song1.setVolume(volume);
        });
        $("#loc").click(function(){
            locate();
        });
        $("#dis").click(function(){
            checkLocations();
        });
        $("#weer").click(function(){
            checkWeather();
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
