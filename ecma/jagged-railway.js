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
        append(list.east, object)
    }
}
// ^^^ for the first node.


// The append function will take 2 arguments: node and object. The function will
// immediately compare the node-object's city property to the
// object-city-property. If the object-city-property is less than the
// node-object's city property, the function will append the object to the
// westward node, otherwise, the function will add the object to the eastward
// node.

function append (list, object) {
    var node = { object: object }
    var a = list.object.city
    var b = object.city

    if (a > b) {
        if (!list.west) {
            list.west = node
        } else {
            append(list.west, object)
        }
    } else {
        if (!list.east) {
            list.east = node
        } else {
            append(list.east, object)
        }

    }


}

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
    dump(head)
}

main()
