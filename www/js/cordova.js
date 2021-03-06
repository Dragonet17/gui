function init() {
    document.addEventListener("deviceready", onDeviceReady, false);
    document.addEventListener("online", onOnline, false);
    document.addEventListener("offline", onOffline, false);

}
function onDeviceReady() {
    navigator.notification.beep(1);

    var options = { frequency: 3000 };  // Update every 3 seconds

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

//function stopA() {
//    navigator.accelerometer.clearWatch(watchID);
//}
function deviceInfo() {
    info = 'Hi, I am your smartphone :-)' +
        '\n' + '=====' + '\n' + 'Device Name    : ' + device.name +
        '\n' + 'Device Cordova : ' + device.cordova +
        '\n' + 'Device Platform: ' + device.platform +
        '\n' + 'Device UUID    : ' + device.uuid +
        '\n' + 'Device Model   : ' + device.model +
        '\n' + 'Device Version : ' + device.version +
        '\n'; navigator.notification.alert(info);
}
function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.CELL] = 'Cell generic connection';
    states[Connection.NONE] = 'No network connection';

    navigator.notification.alert('Connection type: ' + states[networkState]);
}
function onOnline() {
    navigator.notification.alert("Online");
}
function onOffline() {
    navigator.notification.alert("Offline");
}
function onSuccess(acceleration) {

    navigator.notification.alert('Acceleration X: ' +
        acceleration.x +
        '\n' +
        'Acceleration Y: ' +
        acceleration.y +
        '\n' +
        'Acceleration Z: ' +
        acceleration.z +
        '\n' +
        'Timestamp: ' +
        acceleration.timestamp +
        '\n'
    );
}

function onError() {
    navigator.notification.alert('onError!');
}
