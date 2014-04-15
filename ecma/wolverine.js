var fs = require('fs')
var filename = process.argv[2]
var stops

files = fs.readFile(filename, function(err, data) {
    var array = data.toString().split('\n') //splits lines into array elements
    var properties = array.toString().split('\,') //splits elements at comma. Need var array for this line to work.
    var stops = {}
    for( var i = 0; i < array.length - 1; i++) {
        stops = array[i] //With stops.east the array splits along '/n' into objects. Everything is a poperty of east.
                              //I want for very specific properties: Station,
                              //City, State, East.

        console.log(stops)
    }
 });
