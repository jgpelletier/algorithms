// linked list library. The functions are exported, and used in railway.
var fs = require('fs')
var util = require('util')

function objectFrom (string) {
    var object = null
    string = string.split(',')
    return {
        station: string[0].trim(),
        city: string[1].trim(),
        state: string[2].trim(),
        east: object
    }
}

function objectify (array) {
    for (var i = 0; i < array.length-1; ++i) {
        array[i] = objectFrom(array[i])
    }
    return array
}

function link (list, array) {
    var newNode = array.pop()
    if (!list) {
        list =  newNode
    } else {
        newNode.east = list
    }
    return newNode
}

function linkedList (array) {
    var count = array.length
    var lines = objectify(array)
    for (var i = 0; i < count; i++) {
        var list = link(list, lines)
    }
    return list
}

function addWest (list) { // <- simple, west of
    var node = list
    var prev
    while (node.east) {
        prev = node
        node = node.east
        node.west = prev
    }
    return list
}


// functions to be used on linked lists.
function dump (list) { // <- dump
    console.log(util.inspect(list, null, null))
}


function pop (object) {// this does not mutate that list.
    return object.east
}

function find (list, city) {
    while (list) {
        if (list.city == city) {
            return list
        }
        list = list.east
    }
}

// counts the length of the list.
function length (list) {
    var count = 0
    while (list) { // <- loop. loop one.
        if (!list.east) {
            return count
        }
        list = list.east
        count++
    }
}


// Assignment
    // map(list, f)
    //
    // The argument `f` is a function.
    //
    // Return an array.
    // For each item in the list, call `f`. Use its lexical environment to
    //          add the return value to the array.
    //
    // For each element in the list, call `f` with the element as an argument,
    // then push the return value of `f` onto an array.
    //
    // Return an array
function map (list, f) {
    var arr = []
    while (list) {
        var userObject = {  // <- create an object that the user expects.
            station: list.station,
            state: list.state,
            city: list.city
        }
        // <- something else: what is to be done here?
        arr.push(f(userObject)) // <- push something
        list = list.east // <- move to next item.
    }
// Return the array.
    return arr
}

exports.dump = dump
exports.pop = pop
exports.find = find
exports.length = length
exports.objectFrom = objectFrom
exports.objectify = objectify
exports.link = link
exports.linkedList = linkedList
exports.addWest = addWest
exports.map = map
