var fs = require('fs')
var util = require('util')
var assert = require('assert')

// assertion object?

function dump (list) {
    console.log(util.inspect(list, null, null))
}

// If the head of the list has no object property, then you know that the list
// is empty, so you should immediately link the node to the east.
//  Implement this as the first condition.
function goEast (list, /*count,*/ object) {
    var node = { object: object }
    // what test allows me to know the list is empty? The !list.east test allows
    // me to use a recursive function, pass it a list with a head node that never
    // has an object property, and add an object property to the end of the list.
    if (!list.east) {
        list.east = node
        node.west = list
        //count.push('')
    } else {
        goEast(list.east, /*count,*/ object)// <- need to keep this recursive function
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
    var head  = { east: null } // <- this will never have an object propert.

    lines.forEach(function (line) {
        var userObject = object(line)
        goEast(head,/* count,*/ userObject)
    })
/*
    if (!head.east) { // tests if the list is empty
        console.log('The list is empty.')
    else if ( count.length != lines.length) { // tests to make sure each line in the file has an object
        console.log('The list is missing objects')
    } else {
        dump(head)
    }
*/


    //assert.ok(head == true")
    // ^^ what am I asserting? object is true
    dump(head)
}

main()
