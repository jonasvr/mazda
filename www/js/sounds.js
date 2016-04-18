var song1           = null;
var sounds = {
    song2           : {duration:null, media:null, passed:null},
    song3           : {duration:null, media:null, passed:null},
    td              : {duration:null, media:null, passed:null},
    weer            : {duration:null, media:null, passed:null},
    snelheid        : {duration:null, media:null, passed:null},
    albert          : {duration:null, media:null, passed:null},
    endSound        : {duration:null, media:null, passed:null},
    stop:function(){
        $.each(this, function( key, value ) {
            value.passed = null;
        });
    }
};



//volume control
var volume = 1.0;
var fadeseconds=3;  // number of fadeSeconds
var fadeStep = 1 / (fadeseconds * 10);

var playing = 0;
var pauseSound = 1 * 60 * 1000;

//song functions
function fadeOut(snd){
    if (playing == 0 && snd.passed == null) { //prevent overlapping songs
        snd.media.play();
        snd.passed = 1;
        playing = 1;
        var fadingout = setInterval(do_fout, 100);

            function do_fout() {
                if (volume > 0) {
                    // console.log('down');
                    volume = volume - fadeStep;
                    setTimeout(sounds.song1.setVolume(volume),3500);  // media is your audio object
                }
               else {
                //    console.log('done');
                   clearInterval(fadingout);
                   var fadeI = setTimeout(fadeIn, snd.duration-fadeseconds*1000);
                //    snd.passed=1;
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
                sounds.song1.setVolume(volume);  // media is your audio object
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
    sounds.song1 = new Media("shout.mp3",
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    sounds.song2.media = new Media("feel.mp3",
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    sounds.song2.duration = 4000;

    sounds.song3.media = new Media("bang.mp3",
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    sounds.endSound.duration = 5000;

    sounds.weer.media = new Media("weer.mp3",
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    sounds.weer.duration = 6000;

    sounds.albert.media = new Media("albert.mp3",
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    sounds.albert.duration = 5000;

    sounds.td.media = new Media("td.mp3",
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    sounds.td.duration = 5000;

    sounds.snelheid.media = new Media("snelheid.mp3",
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    sounds.snelheid.duration = 6000;

    sounds.endSound.media = new Media("parkeren.mp3",
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    sounds.endSound.duration = 5000;
}
