//node libraries
var fs = require('fs')
var util = require('util')

//takes text file and makes an array of string objects split at each line.
var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')

function dump (list) {
    console.log(util.inspect(list, 5, true))
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
            east: list.east
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

function createRailway (data) {
    var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
    return linkedList(lines)
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

function eastOfRecursive (list, city, count /* <- value does not change */) {
    var node = list//<remind yourself.
    function goEast (node, array, count /* <- local count */) {
        if (!node || count == 0) {// condition. 1 returns an array. 0 evaluation moves to else branch.
            return array//returns the requested data in usable form.
        } else {
            array.push({
                state: node.state,
                city: node.city,
                station: node.station
            })
            return goEast(node.east, array, count - 1)// <- call to self with new parameters.
        }
    }
    function goToStation (node) {
        if (!node) {//if no more nodes.
            return null// always return null and not undefined.
        } else if (node.city == city) {//found city and passes parameters to goEast
            return goEast(node.east, [], count)//type is entered as parameter. type called array.
        } else {//calls self
            return goToStation(node.east)//path is through this branch until not node or node city.
        }
    }
    return goToStation(node)//this happens first.
}

function westOf (list, stop, count /* <- count */) {
    var arr = [] // <- it's not zero
    var node = list
    // todo: this is correct. why are you only pushing once? why not twice?
    while (node && node.city != stop) {
        arr.push({
            state: node.state,
            city: node.city,
            station: node.station
        })
        node = node.east
        if (arr.length > count) {
            arr.shift() // <- what is `shift =`, leaking scope
        }
    }
    return !node ? null : arr
}


function westOfRecursive (list, city, count) {
    var node = list
    var arr = []
    // todo: use push once and test for no node once.
    function goEast (node, arr) {
       if (!node) {
            return null
        } else if (node.city != city) {
            arr.push({
                state: node.state,
                city: node.city,
                station: node.station
            })
            if (arr.length == count + 1) {
                arr.shift()
            }
            return goEast(node.east, arr)
        } else {
            return arr
        }
    }
    return goEast(node, arr)
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
        if (eastCity == array[i].city) { // <- only line that need to change slightly
            return true
        }
    }
    return  false
}


// Design pattern: encapsulation -> it's all about railways
//
//      API:
//
//          railway = createRailway(datafile)
//          eastOf(railway, city, count)
//          westOf(railway, city, count)
//          isCityEastOf(railway, city, count, sought)
//          isStateEastOf(railway, city, count, sought)
//          isStationEastOf(railway, city, count, sought)
//          isEastOf(railway, property, city, count, sought)
//
//      User does not see data model -- a linked list.

//using the functions
var mcrr = createRailway(process.argv[2]) //creation of the linkedlist
 // ^^^ head of the linked list, however it is "opaque"
 //     in a different implementation `mcrr` could be an array, or it
 //         could by a MySQL database connection
/*var eastOfKalamazoo = eastOf(mcrr, "Kalamazoo", 2)
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
console.log(westOf(mcrr, "Kalamazoo", 3))
console.log(westOfRecursive(mcrr, "Boston", 3))
var mccr
console.log(westOfRecursive(mccr, "Kalamazoo", 3))
console.log(westOfRecursive(mcrr, "Kalamazoo", 3))

//console.log(isEastOf(mcrr, "station", "Kalamazoo", 4, "Jackson Station"))//rounds out api
//console.log(isEastOf(mcrr, "city", "Battle Creek", 4, "Jackson Station"))
//Not sure about the purpose of property
function isEastOf (railway, city, count, property, value) { // <- add a parameter
    var array = eastOf(railway, city, count)
    for (var i = 0; i < array.length; i++) {
        if ( array[i] =  value) {//this is wrong. fix it.
            return true
        }
    }
    return  false
}

console.log(isEastOf(mcrr, "Kalamazoo", 4, "station", "Jackson Station")) //true
console.log(isEastOf(mcrr, "Kalamazoo", 4, "city", "Battle Creek"))//true
console.log(isEastOf(mcrr, "Kalamazoo", 4, "city", "Niles"))//false
console.log(isEastOf(mcrr, "Kalamazoo", 4, "state", "Illinois"))//false
console.log(isEastOf(mcrr, "Kalamazoo", 4, "state", "Michigan"))///true
console.log(isEastOf(mcrr, "Kalamazoo", 99, "state", "Detroit"))//false

// encapsulation over, back to hacking

//console.log(mcrr)
*/
function nodeWest (list) { // <- simple, west of
    var node = list
    while (node && !node.west) {
        node.west = null
        node = node.east
    }
    return list
}

function addWest (list) { // <- simple, west of
    list = nodeWest(list)
    var node = list
    var prev
    console.log(node.city)
    while (node.east) {
        prev = node
        node = node.east
        console.log(node.city)
        node.west = prev
        console.log(node.west.city)

     }
    return list
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


var westMcrr = addWest(mcrr)
dump(westMcrr)
var test = toArray(westMcrr)
console.log(westMcrr.east.east.west.city)

//console.log(test)
// a test that ignores encapsulation

console.log(westMcrr.east.east.east.west.west.city == 'Hammond')
