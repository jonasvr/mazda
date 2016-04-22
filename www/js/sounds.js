//song functions
function fadeOut(snd){
    // als de sound nog niet gepasseerd is  en er is niet anders bezig begi
    if (playing == 0 && snd.passed == null) { //prevent overlapping songs
        setTimeout(snd.media.play(),500); // eerst laten faden.
        snd.passed = 1; // kan niet op nieuw afspelen
        playing = 1; // zorgen dat er niets te gelijk afspeeld
        var fadingout = setInterval(do_fout, 100);

            function do_fout() { // volume mainsound stiller zetten
                if (volume > 0) {
                    volume = volume - fadeStep;
                    setTimeout(sounds.song1.setVolume(volume),5000);  // media is your audio object
                }else {

                   clearInterval(fadingout);
                   var fadeI = setTimeout(fadeIn, snd.duration-2500); // terug luiderzetten nadat sound gedaan is
               }
            }
    }
}

function fadeIn(){
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
               },pauseSound); // timeout voor niet direct achter elkaar iets af te spelen

           }
        }
}

// alle sounds inladen
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

    sounds.song3.media = new Media(".mp3",
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
