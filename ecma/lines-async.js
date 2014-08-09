var fs = require('fs')
var line_count

// Each time LineCount is run the variable line_count is incremented by the
// number of lines in the file if the line_count variable is not set to 0 within
// the function.
// vvv Not an API function. If you put the English message in here, how do I use
// your library if my users are French?
function lineCount (file, callback) { // <- vvvvvv async vvvvvv
    // fs.readFile / File System section of the Node.js API docs.
    console.log('asking for file')
    fs.readFile(file, 'ascii', function (err, buffer) { // <- here this, a new main
        // vvv only this is waiting
        console.log('file is ready', new Error('').stack) // <- that <-
        if (err) throw err; // <- not created here, NO STACK

        line_count = 0// <- line_count needs to be set within the function

        for (var i = 0; i < buffer.length; i++) {
            if (buffer[i] == '\n') {
                line_count++
            }
        }

        console.log(new Date)
        setTimeout(function () {
            console.log(new Date)
            callback() // <- call the callback, inclosed in a closure
        }, 7000)
    })
    console.log('asked for file', new Error('').stack) // <- this come before ^^^
}

// -> lineCount(file, callback)
//
// If something is wrong, I'll print out a message, laced with profanity, and in
// Hebrew to stderr and then throw an exception that you can't catch.
//
// ^^^ See if that's in Node.js docs. If not, how should it be done?
//      possible solutions:
//          - throw an error
//          - callback
//          - event emitter
//          - domains? (what is this?)
//  need to understand difference btw error and exception
//      - it is more common to use an error in node then to throw it
//        bc most errors are async. Sync functions need to be thrown/caught.
//
//  Google-fu ~ error first callback pattern Node.js
//  Defining the error-first callback:
//  -  the 1st argument is always reserved for the error object
//          - on a successful response, the err is null
//          - on a unsuccessful response the err is set.

// If it is not there, print the English message.
// Any other error, throw.

function main (file) { // <- nowhere in a stack
    lineCount(file, function() {
        console.log(line_count)
    })

    function lines() {
        console.log('lines is called', new Error('').stack) // <- that <-
        console.log(line_count)
    }

    lineCount(file, lines)

    console.log('going bye-bye', new Error('').stack)
}

main(process.argv[2])

console.log('gone', new Error('').stack)


// <- we are gone
