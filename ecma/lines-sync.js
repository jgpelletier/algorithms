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
var error = new Error( 'it broke')
// When you get an ENOENT error, print *only*, "error: file not found\n".
// Any other error, propagate to unhandled exception handler (stack trace dump.)

try {
    var line_count = lineCountSync(process.argv[2])
    console.log("line count: ", line_count.count , "\ncharacter count: ", line_count.character)
} catch (e) {
    console.log('I caught an error.')
}

// this catches the ENOENT of the file not existing but fails to seperate the
// file I am unable to access.
try {
    var line_count = lineCountSync(process.argv[2])
    console.log("line count: ", line_count.count , "\ncharacter count: ", line_count.character)
} catch (e) {
   /* if (/^ENOENT$/) {
        console.log('error: file not found.')
    } else {*/
        console.error(error.stack)
  // }
}

/*
var line_count = linecountsync(process.argv[2])

/*
// the process.on works for signals
process.on('ENONET', function () {
    console.log("error: file not found\n")
})
*/
//console.log("line count: ", line_count.count , "\ncharacter count: ", line_count.character)
// ^^ propagates unhandled exception (stack trace dump).
