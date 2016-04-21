// index.js===================================================================//

// intevals
var eventInterval = null;
var timeOut = null;
var priorityInteval = null;

// timings
var timeTO = 1*1*1000; // 2 minuten
var timeInterval = 1 * 10 * 1000; // 3 minuten
var priorityTime = 10 * 60 * 1000;
var timing = 1 * 10 * 1000;

var counter=3;
var pauze = 0;

// locations.js===============================================================//
var maxDistance = 0.5 // => in km

// locations
var locations = {
        albert:{    lat:51.193966, long:4.411996, passed:null},
        kaai:{      lat:51.218786, long:4.395486, passed:null},
        hoboken:{   lat:51.173491, long:4.370421, passed:null},
        markgrave:{ lat:51.199197, long:4.403349, passed:null},
        //tankstations
        esso:{      lat:51.189387, long:4.400421},
        total:{     lat:51.188865, long:4.440305},
        esso2:{     lat:51.260049, long:4.419755},
        Meas:{      lat:51.171029, long:4.364098},

        //autogarages
        buga:{      lat:51.194775, long:4.417542},
        ranualt:{   lat:51.173402, long:4.394113},
        ford:{      lat:51.184815, long:4.390922},
        opel:{      lat:51.187206, long:4.386238},
        hyundai:{   lat:51.179374, long:4.433195},
        clear:function(){

        }
};
var current = {lat:null,long:null};
var startLocation = {lat:null, long: null, passed:null};

// sounds.js==================================================================//
var song1           = null;
var sounds = {
    song2           : {duration:null, media:null, passed:null, priority : 1},
    song3           : {duration:null, media:null, passed:null, priority : 0},
    td              : {duration:null, media:null, passed:null, priority : 1},
    weer            : {duration:null, media:null, passed:null, priority : 0},
    snelheid        : {duration:null, media:null, passed:null, priority : 0},
    albert          : {duration:null, media:null, passed:null, priority : 1},
    endSound        : {duration:null, media:null, passed:null, priority : 0},
};



//volume control
var volume = 1.0;
var fadeseconds=3;  // number of fadeSeconds
var fadeStep = 1 / (fadeseconds * 10);

var playing = 0;
var pauseSound = 1 * 10 * 1000;
