/*
 * Joyant Suggestions:
 *
 * Count the number of lines in the given file. Arguments:
 *
 *  file            a file within the directory
 *
 *  callback        invoked when the file is read or it fails.
 *                  Upon success, callback is invoked as callback(null, buffer)
 *                  Upon failure, callbock is invoked as callback(err) instead.
 *
 * This function may fail for several reasons:
 *  File does not exist
 *
 *  Do not have access to file
 *
 *  all errors will have the conventional 'errno' properties.
 */


// needed api vvv
var fs = require('fs')
// possible api's vvv
// domain - not stable
// event - stable, but is this to used with the readFile function?
// assert


//var line_count

// vvv Not an API function. If you put the English message in here, how do I use
// your library if my users are French?
// vvv Still not a function that anyone can use.
function lineCount (file, callback) { // <- vvvvvv async vvvvvv
    // fs.readFile / File System section of the Node.js API docs.
    fs.readFile(file, 'ascii', function (err, buffer) { // <- a new stack is here
        if (err){
                callback(err)
        } else {
            line_count = 0

            for (var i = 0; i < buffer.length; i++) {
                if (buffer[i] == '\n') {
                    line_count++
                }
            }

            console.log(new Date)
            setTimeout(function () {
                console.log(new Date)
                callback(null, line_count)
            }, 7000)
        }
    })
}

function main (file) {

    function lines(err, line_count) {
        if (process.argv[3] == 'french' && err) {
            if (err.code == 'ENOENT') {
                console.log('Le fichier n\'existe pas')
            } else {
                console.log('Une erreur s\'est produite.')
            }
            return
        }
        else if (err) {
            if (err.code == 'ENOENT') {
                console.log('File does not exist.')
            } else {
                console.log('An error occured.')
            }
            return
        } else {
            if (process.argv[3] == 'french') {
                console.log('Voici votre compte de lignes.')
            } else {
                console.log('Here is your count of lines.')
            }
            console.log(line_count)
        }
    }

lineCount(file, lines)
}


main(process.argv[2])


/*
    if (process.argv[3] == 'french') {
        try {
            lineCount(file, lines)
        } catch (e) {
            if (e.code == 'ENOENT') {
                console.log('Le fichier n\'existe pas')
            }  else {
                console.log('Une erreur s\'est produite.')
            }
            return
        }
        console.log('Tout est réussie.')
        console.log('Je suis sûr que vous pouvez lire tout ici, car il est tout en français.')
    } else {
        try {
            console.log('in else')
            lineCount(file, lines) // <- new stack from async function.
        } catch (e) {  // <- this is passed by before the stack returns and just returns
            console.log('Is this how line count would report an error?')
            if (e.code == 'ENOENT') {
                console.log('File does not exist.')
            } else {
                console.log('An error occured.')
            }
            return
        }
        console.log('Everying went just prefectly. There were no errors.')
        console.log('Isn\'t that wonderful.')
        console.log('I called `lineCount` and everything was glorius and swell.')
        console.log('What could possibly go wrong when calling line count?')
        console.log('I swear on all that is holy that are now reading a count of lines.')
    }
}
*/



// Assignment
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
//          - domains? (what is this?) (nausea.)
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
