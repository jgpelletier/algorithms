var fs = require('fs')

var line_count = 0
function lineCount (callback) { // <- vvvvvv async vvvvvv
    // fs.readFile / File System section of the Node.js API docs.
    fs.readFile('wolverine.txt', 'ascii', function (err, buffer) {
        if (err) throw (err);

        //var line_count = 0
        for (var i = 0; i < buffer.length; i++) {
            if (buffer[i] == '\n') {
                line_count++
            }
        }
        callback()
   })
}

function lines (){
    console.log(line_count)
} // ^^^^^^ function ^^^^^^^

lineCount(lines)
//console.log("This is the first function:\nline count: ", line_count, "\ncharacter count: ", i)
/*
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
*/
