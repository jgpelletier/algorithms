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
//
// If the function discovers the node-object's eastward or westward property is
// already occupied, then it will call the append function with the 2 arguments:
// the node of the occupied property and the object.
function goWest (list, object) {
    var node = { object: object }
    //console.log(list.object.city)
    if (!list.west) {
        //console.log('')
        list.west = node
        node.list = list
    } else {
        goWest(list.west, object)
    }
}

function goEast (list, object) {
    var node = { object: object }
    //console.log(list.object.city)
    if (!list.east) {
        //console.log('')
        list.east = node
        node.west = list
    } else {
        goEast(list.east, object)
    }
}

function append (list, object) {
    var node = { object: object }
    //console.log(list)
    // vvv must these change?
    var a = list.object.city // this needs to say chicago
    var b = object.city
    /*
    console.log('new loop')
    console.log(list.object.city)
    console.log(object.city)
    console.log( a > b )
    console.log('')
    */

    // how do I address the fact that a and b will be changing each time?
    if (a > b) {
    // logic of goWest should be in here. I should not be calling goEast
        console.log('go west')
        console.log(a, b)
        console.log(a > b)
        //goWest(list, object)
        if (!list.west) {
            //console.log('')
            list.west = node
            node.list = list
        } else {
            append(list.west, object)
        }
    } else {
    // logic of goEast should be in here. I should not be calling goEast
        console.log('go east')
        console.log(a, b)
        console.log(a > b)
        //goEast(list, object)
        if (!list.east) {
            //console.log('')
            list.east = node
            node.west = list
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

    //dump(head)
}

main()
