var fs = require('fs')
var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
var pop = lines.pop()


function objectFrom(string) { //converts string into object
    string = string.split(',')
    var object = { station: string[0].trim(), city: string[1].trim(), state: string[2].trim(), east: object }
    return object //I am uncertain about adding the property east to the object now or later
}

function objectify(array) { // converts sting.Object elemen into Object element
    for (var i = 0; i < array.length; ++i) {
        array[i] = objectFrom(array[i])
    }
    return array
}

function  link (object, array) {
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
    }
}

function push (list, array) {
    if (!list) {
        list = array.shift()
        return list
    } else {
         list.east = array.shift() }
         return list
        }

//simple steps: what would be the most simple thing to do next?

lines = objectify(lines)
var list = link(list, lines)
console.log(list)
list = link(list, lines)
console.log(list)
list = link(list, lines)
console.log(list)
list = link(list, lines)
console.log(list)
