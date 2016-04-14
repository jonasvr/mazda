var song1 = null;
var song2 = {duration:null,media:null};
var song3 = {duration:null,media:null};


var time = 4000;

//volume control
var volume = 1.0;
var fadeseconds=3;  // number of fadeSeconds
var fadeStep = 1 / (fadeseconds * 10);


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
        currentLocation();
        song1.play();
        // setInteval(checkLocations(),20000)
        $("#load").click(function(){
            loadSongs();
        });
        $("#play").click(function(){
            $("#info").html("PLAY 1");

            // song1.play();
            setInteval(checkLocations,10000);
            // setTimeout(setInteval(checkLocations(),1000),20*1000);
        });
        $("#play2").click(function(){
            $("#info").html('test');
            fadeOut(song2.duration);
            song2.media.play();
            console.log(song2.media.statusCallback());
        });
        $("#stop").click(function(){
            song1.stop();
            song2.media.stop();
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
            watZegtDeBoosere();
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
