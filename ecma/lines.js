var fs = require('fs')

// fs.readFile / File System section of the Node.js API docs.
fs.readFile('wolverine.zxt', 'ascii', function (err, buffer) {
    if(err) throw err

    var line_count = 0
    for (var i = 0; i < buffer.length; i++) {
        if (buffer[i] == '\n') {
            line_count++
        }
    }
    console.log("This is the first function:\nline count: ", line_count, "\ncharacter count: ", i)
})


var buffer = fs.readFileSync('wolverine.txt', 'ascii')
    // ^^ String
var i = 0
var line_count = 0


for (i; i < buffer.length; i++) {
    if (buffer[i] == '\n') {
        line_count++
    }
}

console.log("This is the second function:\nline count: ", line_count, "\ncharacter count: ", i)
