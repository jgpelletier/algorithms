var fs = require('fs')

var buffer = fs.readFileSync('wolverine.txt', 'ascii')

var i = 0
var line_count = 0


for ( i; i < buffer.length; i++) {
    if (buffer[i] == '\n') {
        line_count++
    }
}

console.log("line count:", line_count, "\ncharacter count:", i)