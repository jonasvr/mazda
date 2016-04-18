var song1           = null;
var song2           = {duration:null, media:null, player:null};
var song3           = {duration:null, media:null, player:null};
var td              = {duration:null, media:null, player:null};
var weer            = {duration:null, media:null, passed:null};
var snelheid        = {duration:null, media:null, player:null};
var albert          = {duration:null, media:null, player:null};
var endSound        = {duration:null, media:null, player:null};


//volume control
var volume = 1.0;
var fadeseconds=3;  // number of fadeSeconds
var fadeStep = 1 / (fadeseconds * 10);

var playing = 0;
var pauseSound = 1 * 60 * 1000;

//song functions
function fadeOut(sound){
    if (playing == 0) { //prevent overlapping songs
        sound.media.play();
        sound.passed = 1;
        playing = 1;
        var fadingout = setInterval(do_fout, 100);

            function do_fout() {
                if (volume > 0) {
                    // console.log('down');
                    volume = volume - fadeStep;
                    setTimeout(song1.setVolume(volume),2000);  // media is your audio object
                }
               else {
                //    console.log('done');
                   clearInterval(fadingout);
                   var fadeI = setTimeout(fadeIn, sound.duration-fadeseconds*1000);
                //    sound.passed=1;
               }
            }
    }
}

function fadeIn(){
    // console.log('fading in');
    var fadingin = setInterval(do_fin, 100);

        function do_fin() {
            if (volume < 1) {
                volume = volume + fadeStep;
                song1.setVolume(volume);  // media is your audio object
            }
           else {
               clearInterval(fadingin);
               setTimeout(function(){
                    playing = 0; // this sounds is done, the next can play
               },pauseSound);

           }
        }
}


function loadSong(){
    // console.log("load");
    song1 = new Media("shout.mp3",
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    song2.media = new Media("feel.mp3",
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    song2.duration = 4000;

    song3.media = new Media("bang.mp3",
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    endSound.duration = 5000;

    weer.media = new Media("weer.mp3",
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    weer.duration = 6000;

    albert.media = new Media("albert.mp3",
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    albert.duration = 5000;

    td.media = new Media("td.mp3",
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    td.duration = 5000;

    snelheid.media = new Media("snelheid.mp3",
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    snelheid.duration = 6000;

    endSound.media = new Media("parkeren.mp3",
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    endSound.duration = 5000;
}
