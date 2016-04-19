

// var watchID = navigator.accelerometer.watchAcceleration(onSuccessAccel, onErrorAccel, optionsAccel);
function test(){
    function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
    };
    function onError() {
        alert('onError!');
    };
    var options = { frequency: 10000 };  // Update every 3 seconds
    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}
