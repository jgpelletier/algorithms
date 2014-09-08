var fs = require('fs')
var util = require('util')
var assert = require('assert')


function dump (list) {
    console.log(util.inspect(list, null, null))
}

function addStation(list, object) {
    var node = { object: object }
    if (list.east == null) {
        list.east = node 
    } else {
        append(list, object)
    }
}
// ^^^ for the first node.

function append (list, object) {
    var node = { object: object }
    if (!list.east) {
        list.east = node
        node.west = list
    } else {
        append(list.east, object)// <- need to keep this recursive function
    }
}
// This ^^^^  creates a function that will walk to
// the end of the list and append the node.

function object (line) { // function to convert the line to a railroad station object
    var string = line.split(',')
    return {
        station: string[0].trim(),
        city: string[1].trim(),
        state: string[2].trim()
    }
}
// This ^^^ function is declared every time `forEach` invokes the
// anonymous function.  It does not use anything from the enclosing
// scope, so it does not need to be defined inside the forEach function.


function main () {
    var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
    var popped = lines.pop() // <- pops empty line
    var head  = { east: null } // <- this will never have an object propert.

    lines.forEach(function (line) {
        var userObject = object(line)
        addStation(head, userObject)
    })
    //assert.ok(head != 'object', 'this is a test')
    dump(head)
}

main()
