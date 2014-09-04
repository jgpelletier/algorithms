var fs = require('fs')
var util = require('util')
var assert = require('assert')

// assertion object?

function dump (list) {
    console.log(util.inspect(list, null, null))
}

function goEast (list, /*count,*/ object) {
    var node = { object: object }
    if (!list.east) {
        list.east = node
        node.west = list
        //count.push('')
    } else {
        goEast(list.east, /*count,*/ object)
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
    //var count = []
    var head  = { east: null }

    lines.forEach(function (line) {
        var userObject = object(line)
        goEast(head,/* count,*/ userObject)
    })

    if (!head.east) { // tests if the list is empty
        console.log('The list is empty.')
    /* }
    else if ( count.length != lines.length) { // tests to make sure each line in the file has an object
        console.log('The list is missing objects')
    */
    } else {
        dump(head)
    }



    //assert.ok(head == true")
    // ^^ what am I asserting? object is true
    //dump(head)
}

main()
