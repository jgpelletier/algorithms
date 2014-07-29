var fs = require('fs')

function lineCount (callback) { // <- vvvvvv async vvvvvv
    // fs.readFile / File System section of the Node.js API docs.
    fs.readFile('wolverine.zxt', 'ascii', function (err, buffer) {
        if (err) return callback(err)
        callback(null, buffer)

        var line_count = 0
        for (var i = 0; i < buffer.length; i++) {
            if (buffer[i] == '\n') {
                line_count++
            }
        }
    })
}

lineCount(function(err, buffer){
    console.log(line_count)
}) // ^^^^^^ function ^^^^^^^

//console.log("This is the first function:\nline count: ", line_count, "\ncharacter count: ", i)

function lineCountSync (filename) {
    var buffer = fs.readFileSync(filename, 'ascii')
        // ^^ String
    var i = 0
    var line_count = 0


    for (i; i < buffer.length; i++) {
        if (buffer[i] == '\n') {
            line_count++
        }
    }
    return line_count
}

var line_count = lineCountSync('wolverine.txt')
//console.log("This is the second function:\nline count: ", line_count, "\ncharacter count: ", i)
