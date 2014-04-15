var fs = require('fs')
var filename = process.argv[2]

files = fs.readFile(filename, function(err, data) {
    var array = data.toString().split('\n')
    var object = array.toString().split('\,')
    for( var i = 0; i < array.length - 1; i++) {
        console.log(object)
    }
 });
