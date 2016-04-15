var song1 = null;
var song2 = {duration:null, media:null, player:null};
var song3 = {duration:null, media:null, player:null};
var endSound = {duration:null, media:null, player:null};

//volume control
var volume = 1.0;
var fadeseconds=3;  // number of fadeSeconds
var fadeStep = 1 / (fadeseconds * 10);

var playing = 0;
//song functions
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

    endSound.media = new Media("endSound.mp3",
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    endSound.duration = 8000;
}
function fadeOut(sound){
    console.log('fading');
    if (playing == 0) { //prevent overlapping songs
        sound.media.play();
        sound.passed = 1;
        console.log(playing);
        playing = 1;
        console.log(playing);
        var fadingout = setInterval(do_fout, 100);

            function do_fout() {
                if (volume > 0) {
                    // console.log('down');
                    volume = volume - fadeStep;
                    song1.setVolume(volume);  // media is your audio object
                }
               else {
                //    console.log('done');
                   clearInterval(fadingout);
                   var fadeI = setTimeout(fadeIn, sound.duration-fadeseconds*1000);
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
               },2*60*1000);

           }
        }
}
