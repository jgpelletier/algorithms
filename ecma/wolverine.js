var fs = require('fs')
var util = require('util')
var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')

function dump (list) {
    console.log(util.inspect(list, null, null, true))
}

function objectFrom (string) { //converts string into object
    string = string.split(',')
    var object
    return { station: string[0].trim(), city: string[1].trim(), state: string[2].trim(), east: object }
}

function objectify (array) { // converts string.Object element into Object element.
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

//functions to change from linked list to array

function pop (object) {//this does not mutate that list.
    return object.east
}

function find (object, city) {
    var list = object
    while (list) {
        if (list.city == city) {
            return list
        }
        list = list.east
    }
}

function __do_not_use__length (linkedlist) {
    var list = linkedlist
    var count = 0
    while (list) {
        if (!list.east) {
            return count
        }
        list = list.east
        count++
    }
}

var mcrr = linkedList(lines) //creation of the linkedlist

function toArray (linkedlist) {
    var arr = []
    var list = linkedlist
    var i = 0
    while (list) {
        arr[i++] = list.station
        list = list.east
    }
    return arr
}

function eastOf (linkedlist, stop, count) {
    var arr = [] // <- this is a declaration, not a subscript
    var list = linkedlist
    var i
    while (list && list.city != stop) {
        list = list.east
    }
    if (list.city == stop) {
        for (i = 0; i < count; i++) {
            // Return all station data.
            list = list.east
            var line = []
            line.push(list.station)
            line.push(list.city)
            line.push(list.state)
            line.push('\n')
            arr[i] =  line.join(', ')
            console.log(arr)
            console.log(arr.length)
        }
        arr = arr.toString()
    }
    return arr
}

// Major assignment.

// NOT going to change the structure of the list.
// Do not use array subscripts.
function westOf (linkedList, stop, count) {
    // You will only add code between these braces.
    var arr = []
    var list = linkedList
    // something here.
    return arr
}

console.log('--------------------')
console.log(__do_not_use__length(mcrr)) // 14
mcrr = pop(mcrr) // this does not pop
console.log(__do_not_use__length(mcrr)) // 14
console.log('--------------------')
console.log(eastOf(mcrr, "Kalamazoo", 2))
console.log(westOf(mcrr, "Kalamazoo", 2))
//console.log(toArray(mcrr))

//dump(mcrr)//changes the list so Kalamazoo is the last stop
//dump(mcrr)
//console.log(shifted)
//console.log(anArr)
//console.log(Array.isArray(anArr))
//console.log(anArr.length)
//anArr.reverse()
//console.log(anArr)
//var popped = anArr.pop()
//console.log(popped)
//console.log(sectn)
//mcrr = pop(mcrr)
//console.log(length(sectn))
//dump(sectn)
//shift(mcrr)// return a list without last node
//dump(mcrr)
//lastNode = shift(mcrr)//lastNode holds the shifted object
//dump(mcrr)
//console.log(lastNode)
