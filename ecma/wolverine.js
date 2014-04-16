var fs = require('fs')
var data = fs.readFileSync(process.argv[2])
var array = data.toString().split('\n') //splits lines into array elements

for( var i = 0; i < array.length - 1; i++) {
    var stop = new Object()
    stop[i+1] = array[i]
    console.log(stop)
}


//var stop = {}
//Utils.Stops = function(stop, station, city, state) {
//this.stop = stop;
//this.station = station;
//this.city = city;
//this.state = state;
//}

//function push (station, city, state, stop) { //need to push in each property
//    return { station: station, city: city, state: state, nextstop: stop }
//}

// Step 1: What is the diffrence between `readFile` and `readFileSync`?
// Step 2: Use `readFileSync`.
// Step 3: Convert file to array of lines, dump.
// Step 4: Print each line with a line number (based on 1).
//      1 Chicago Union Station, Illinois, Chicago
//      2 Hammond-Whiting Amtrak Station, Indiana, Hammond
//      3 Michigan City Station, Michigan City, Indiana
// Step 5: Convert each line into an array of fields, print each array of fields.
// Step 6: Convert the array of fields into an object.

//fs.readFile(filename, function(err, data) {
//    var stop = {}
//    var array = data.toString().split('\n') //splits lines into array elements
//    for( var i = 0; i < array.length - 1; i++) {
//        stop = array[i]
//        console.log(stop)
//    }

 //obj = array.reduce(function(o, v, i) { //I have no idea what this reduce does,
    //    o[i] = v
    //    return o
    // }, {})
   //var l = array.length -1
   // while(l >= 0 && (obj[l--] = array.pop())){
   //}
    //var properties = array.toString().split('\,') //splits elements at comma. Need var array for this line to work.
    //var stop = {} //where this is declared makes a difference.
    //for( var i = 0; i < array.length - 1; i++) {
    //       stop = array[i] //With stop.east the array splits along '/n' into objects. Everything is a poperty of east.
    //       console.log(stop)
    //}
