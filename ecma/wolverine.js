var fs = require('fs')
var util = require('util')
var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')

function dump (list) {
    console.log(util.inspect(list, null, null, true))
}
function objectFrom (string) { //converts string into object
    string = string.split(',')
    // remove unnecessary variable
    var object = { station: string[0].trim(), city: string[1].trim(), state: string[2].trim(), east: object }
    return object
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

var mcrr = linkedList(lines)
console.log(Object.keys(mcrr))
console.log(Object.getPrototypeOf(mcrr))
console.log(Object.isPrototypeOf(mcrr))
console.log(mcrr.valueOf())
console.log(mcrr.hasOwnProperty("east"))

//dump(mcrr)

// returns an array, next `n` stops east of `stop`.
// small steps:
//  - copy the object

function eastOf (linkedlist, stop, east) {
    var list = linkedlist
    console.log("In eastOf", list)
    while (list) {
    console.log("In while loop", list)
        if (list.city == stop) {
            return util.inspect(list, null, east, true)
        }
     list = list.east
    }
}

//function eastOf (linkedlist) {
//   var listEast = linkedlist.toString().split('east')
//   var station = []
   //while (listEast.east) {
   //     prevStation = listEast
   //     listEast = listEast.east
//     console.log(listEast)
//}

//console.log(length(mcrr, 'kalamazoo', 2))

//i = eastOf(mcrr, 'Michigan City', 2)
//console.log(typeof(i))
//console.log(i)
//console.log(eastOf(mcrr, 'Chicago', 14))
