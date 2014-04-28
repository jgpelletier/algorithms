var fs = require('fs')
var util = require('util')
var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
var pop = lines.pop()

function dump (list) {
    console.log(util.inspect(list, null, null))
}
// spacing
function objectFrom (string) { //converts string into object
    string = string.split(',')
    var object = { station: string[0].trim(), city: string[1].trim(), state: string[2].trim(), east: object }
    return object //I am uncertain about adding the property east to the object now or later
}

// spacing is bad and fix it
function objectify (array) { // converts string.Object element into Object element.
    for (var i = 0; i < array.length; ++i) {
        array[i] = objectFrom(array[i])
    }
    return array
}

function link (object, array) {
    var list = object
    if (!object) {
        console.log("Chameleon")
        object = array.shift()
        return object
    } else if (!object.east) {
        console.log("Watermelon Man")
        object.east = array.shift()
        return object
    } else if (!object.east.east) {
        console.log("Sly")
        object.east.east = array.shift()
        return object
    } else if (!object.east.east.east) {
        object.east.east.east = array.shift()
        //console.log(object) //Why does this return as Object? The element is shifted from the array.
        return list
    } else if (!object.east.east.east.east) {
        console.log("Sly")
       object.east.east.east.east = array.shift()
        return object
    } else if (!object.east.east.east.east.east) {
        object.east.east.east.east.east = array.shift()
        return object
    } else if (!object.east.east.east.east.east.east) {
        object.east.east.east.east.east.east = array.shift()
        return object
    } else if (!object.east.east.east.east.east.east.east) {
       object.east.east.east.east.east.east.east = array.shift()
        return object
    } else if (!object.east.east.east.east.east.east.east.east) {
        object.east.east.east.east.east.east.east.east = array.shift()
        return object
    } else if (!object.east.east.east.east.east.east.east.east.east) {
        object.east.east.east.east.east.east.east.east.east = array.shift()
        return object
    } else if (!object.east.east.east.east.east.east.east.east.east.east) {
        object.east.east.east.east.east.east.east.east.east.east = array.shift()
        return object
    } else if (!object.east.east.east.east.east.east.east.east.east.east.east) {
        object.east.east.east.east.east.east.east.east.east.east.east = array.shift()
        return object
    } else if (!object.east.east.east.east.east.east.east.east.east.east.east.east) {
        object.east.east.east.east.east.east.east.east.east.east.east.east = array.shift()
        return object
    } else if (!object.east.east.east.east.east.east.east.east.east.east.east.east.east) {
        object.east.east.east.east.east.east.east.east.east.east.east.east.east = array.shift()
        return object
    } else if (!object.east.east.east.east.east.east.east.east.east.east.east.east.east.east) {
        object.east.east.east.east.east.east.east.east.east.east.east.east.east.east = array.shift()
        return object
    }
}
//simple steps: what would be the most simple thing to do next?

lines = objectify(lines)
var list = link(list, lines)
list = link(list, lines)
list = link(list, lines)
list = link(list, lines)
list = link(list, lines)
list = link(list, lines)
list = link(list, lines)
list = link(list, lines)
list = link(list, lines)
list = link(list, lines)
list = link(list, lines)
list = link(list, lines)
list = link(list, lines)
list = link(list, lines)
list = link(list, lines)
dump(list)
