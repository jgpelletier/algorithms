//node libraries
var fs = require('fs')
var util = require('util')

//takes text file and makes an array of string objects split at each line.
var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')

function dump (list) {
    console.log(util.inspect(list, 1, true))
}


//functions to create objects from an array of string objects
function objectFrom (string) {
    string = string.split(',')
    var object
    return { station: string[0].trim(), city: string[1].trim(), state: string[2].trim(), east: object }
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

//functions to be used on linked lists.
function pop (object) {//this does not mutate that list.
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

//functions that return arrays
function toArray (list) {
    var arr = []
    var i = 0
    while (list) {
        arr.push({
            state: list.state,
            city: list.city,
            station: list.station,
        })
        list = list.east
    }
    return arr
}

// O(n * n)
function horribleDuplicates (array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i] == array[j]) {
                return true
            }
        }
    }
    return false
}

// Big-O: What is the worst case performance? O(n)
function eastOf (list, stop, count) {
    var arr = []
    var i
    while (list && list.city != stop) {
        list = list.east
    }
    if (list && list.city == stop) {
        for (i = 0; i < count && list.east; i++) {
            var node = list.east
            list = list.east
            arr.push({ //<-Remember this process and the creation of the objects
                state: node.state,
                city: node.city,
                station: node.station,
            })
        }
        return arr
    //} else { // <- else is not necessary, why? w/o else the function returns undefined, primitive value.
    //    return null                       // is a primitive value that represents null, a empty,
                                            // non-existant reference.
   }
}

// Big-O: What is the worst case performance?
// westOf should not gather all stops prior to desired stop.
//      there should only be one loop.
//      the array should never be more than `count` length. <- read freud, read agatha christie,
//                                                             read what that says.
//          ^^^ WHAT DOES THIS SAY!?!
//      use array functions, you should not subscript
function westOf (list, stop, count /* <- count */) {
    var arr = [] // <- it's not zero
    var i = 0
    // this is the fastest implementation for N < 1024, real graph database N > 99999.
    while (list && list.city != stop) {
        var node = list
        list = list.east
        arr.push({
            state: node.state,
            city: node.city,
            station: node.station,
        })
        if (arr.length > count) {
            shift = arr.shift()
           //throw new Error('you failed')
        }
    }
    //return arr.length > count ? arr.slice(arr.length - count) : arr
    return arr
}

//functions to test the integrity of the data
function isStationEastOf (railway, city, count, eastStation) {
    var array = eastOf(railway, city, count)
    for (var i = 0; i < array.length; i++) {
        if (eastStation == array[i].station) {
            return true
        }
    }
    return  false
}

function isStateEastOf (railway, city, count, eastState) {
    var array = eastOf(railway, city, count)
    for (var i = 0; i < array.length; i++) {
        if (eastState == array[i].state) {
            return true
        }
    }
    return  false
}

function isCityEastOf (railway, city, count, eastCity) {
    var array = eastOf(railway, city, count)
    for (var i = 0; i < array.length; i++) {
        if (eastCity == array[i].city) {
            return true
        }
    }
    return  false
}

//using the functions
var mcrr = linkedList(lines) //creation of the linkedlist
var eastOfKalamazoo = eastOf(mcrr, "Kalamazoo", 2)
console.log(isCityEastOf(mcrr, "Kalamazoo", 4, "Battle Creek"))
console.log(eastOf(mcrr, "Kalamazoo", 1))
//console.log(westOf(mcrr, "Boston", 1))
console.log(eastOf(mcrr, "Boston", 1))
console.log(isCityEastOf(mcrr, "Kalamazoo", 4, "Battle Creek")) // exact match
console.log(isCityEastOf(mcrr, "Kalamazoo", 4, "Detroit")) // exact match
console.log(isCityEastOf(mcrr, "Kalamazoo", 4, "Niles")) // exact match
console.log(isCityEastOf(mcrr, "Kalamazoo", 4, "Jackson")) // exact match
console.log(isStateEastOf(mcrr, "Kalamazoo", 4, "Michigan"))
console.log(isStationEastOf(mcrr, "Kalamazoo", 4, "Jackson Station"))
console.log(eastOf(mcrr, "Chicago", 15))
console.log(westOf(mcrr, "Detroit", 3))
console.log(westOf(mcrr, "Kalamazoo", 3))
