var song1 = new Media("file:///android_asset/www/audio/shot.mp3",
    // success callback
    function () {
        console.log("playAudio():Audio Success");
    },
    // error callback
    function (err) {
        console.log("playAudio():Audio Error: " + err);
    }
);
var song2 = null;
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
        window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        console.log('test');
        // console.log(getCordovaPath());
        console.log("test2");
        $("#load").click(function(){
            loadSongs();
        });
        $("#play").click(function(){
            console.log("play");
            console.log(song1);
            song1.play();
        });
        $("#play2").click(function(){
            console.log('play2');
            console.log(song2);
            song2.play();
        });

        $("#stop").click(function(){
            console.log("stop");
            song1.stop();
        });

        $("#dur").click(function(){
            // $("#info").html(song1.getDuration());
            $("#info").html("test");
        });

        $("#tst").click(function(){
            loadSong();
            $("#info").html(getPhoneGapPath());
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

function loadSong(){

    song2 = new Media("file://www/audio/shout.mp3",
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    console.log(song1);
    console.log(song2);
}

function fail() {
    console.log("failed to get filesystem");
}

function gotFS(fileSystem) {
    console.log("got filesystem");

        // save the file system for later access
    console.log(fileSystem.root.fullPath);
    window.rootFS = fileSystem.root;
}

// function getPhoneGapPath() {
//
// var path = window.location.pathname;
// path = path.substr( path, path.length - 10 ); //strip off index.html
// return 'file://' + path;
//
// };
