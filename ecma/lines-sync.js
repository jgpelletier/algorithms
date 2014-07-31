var fs = require('fs')


function lineCountSync (filename, i) {
    var buffer = fs.readFileSync(filename, 'ascii')
        // ^^ String
    var line_count = 0

    for (i = 0; i < buffer.length; i++) {
        if (buffer[i] == '\n') {
            line_count++
        }
    }
    return { count: line_count, character: i }

}

var line_count = lineCountSync('wolverine.txt')
console.log("line count: ", line_count.count , "\ncharacter count: ", line_count.character)
