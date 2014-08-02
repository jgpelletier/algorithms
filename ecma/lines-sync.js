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

console.log(process.argv)

// When you get an ENOENT error, print *only*, "error: file not found\n".
// Any other error, propagate to unhandled exception handler (stack trace dump.)
try {
    var line_count = lineCountSync(process.argv[2])
    console.log("line count: ", line_count.count , "\ncharacter count: ", line_count.character)
} catch (e) {
    console.log('I caught an error.')
}
