function onSuccessAccel(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
}

function onErrorAccel() {
    alert('onError!');
}

var options = { frequency: 1000 };  // Update every 3 seconds

// var watchID = navigator.accelerometer.watchAcceleration(onSuccessAccel, onErrorAccel, options);
