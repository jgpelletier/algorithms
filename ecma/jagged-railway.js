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

function object (line) {
    var string = line.split(',')
    return {
        station: string[0].trim(),
        city: string[1].trim(),
        state: string[2].trim()
    }
}


// IMPLEMENT THIS FUNCITON vvvv

function visit (node, visitor) {
// INSTRUCTIONS
    // If node is null, return nothing immediately.
    // If node has a west node, call visit passing the west node and the visitor.
    // Call visitor with the node's object. (When does this happen?)
    // If node has a east node, call visit passing the east node and the visitor.

// IMPLEMENT THIS FUNCTION ^^^^

    // (1) If node is null, return nothing immediately.
    if (!node) {
        return console.log("nothing immediately")
    }

    // console.log(typeof(visitor)) // <- this is always a function


    // (2) If node has a west node, call visit passing the west node and the visitor.
    if (node.west) {
        //console.log('west')

        visit(node.west, visitor)
    }

    // (3) Call visitor with the node's object.
    visitor(node.object) // <- call visitor here?


    // (4) If node has a east node, call visit passing the east node and the visitor.
    if (node.east) {
        //console.log('east')

        visit(node.east, visitor)
    }

}

// vvv Travel skips the head node and calls visit. This is done.
function travel (head, visitor) {
    visit(head.east, visitor)
}

function main () {
    var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
    var popped = lines.pop()
    var head  = { east: null }

    lines.forEach(function (line) {
        var userObject = object(line)
        addStation(head, userObject)
    })

    // vvv Call travel. This is done.
    travel(head, function (object) { // the anonymous function is visitor 
        console.log(object.city)
    })

    // vvv REMOVE BEFORE SUBMITTING ASSIGNMENT vvv

    // dump(head)
}

main()
