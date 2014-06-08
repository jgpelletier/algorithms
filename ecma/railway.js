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


//node libraries
var fs = require('fs')
var util = require('util')
var list = require('./list')

// Create a railway.
//
// Optionally provide a westward link if you can afford the memory to support
// it. The westward link provides additional operations.
function createRailway (data, west) {
    // all the list functions here, moved to `list.js`.
    var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
    var railway = list.linkedList(lines)
    if (west) {
        list.addWest(railway)
    }
    return railway
}

//functions to be used on linked lists.
function dump (list) { // <- dump
    console.log(util.inspect(list, null, null))
}


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

// O(n * n) <- Think about effeciency
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

function gotoStation (list, city) {
    var node = list
    function toStation (node) {
        if (!node) {
            return null
        } else if (node.city == city) {
            return node
        } else {
           return toStation(node.east)
        }
    }
    return toStation(node)
}


function westOf (list, stop, count /* <- count */) {
    var arr = [] // <- it's not zero
    var node = list
    while (node && node.city != stop) {
        arr.push({
            state: node.state,
            city: node.city,
            station: node.station
        })
        node = node.east
        if (arr.length > count) {
            arr.shift()
        }
    }
    return !node ? null : arr
}


function westOfRecursive (list, city, count) {
    var node = list
    var arr = []
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

function goEast (list, count) {
    var node = list
    for (var i = 0; i < count; i++) {
        if (!node.east) {
            return null
        } else {
        node = node.east
        }
    }
    return node
}

function goWest (list, count) {
    var node = list
    for (var i = 0; i < count; i++) {
        if (!node.west) {
            return null
        } else {
        node = node.west
        }
    }
    return node
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

function isEastOf (railway, city, count, property, value) { // <- add a parameter
    var array = eastOf(railway, city, count)//this will not change
    for (var i = 0; i < array.length; i++) {
        if (array[i][property] == value) {//objects can use any string as a key
            return true
        }
    }
    return  false
}

function getStationName(object) {
    return object.station
 }

function getCity(object) {
    return object.city
}


function getObject (node) {
    return {
        city: node.city,
        state: node.state,
        stationName: node.station
    }
}

exports.getStationName = getStationName
exports.getCity = getCity
exports.goEast = goEast
exports.goWest = goWest
exports.gotoStation = gotoStation
exports.createRailway = createRailway
exports.isEastOf = isEastOf
exports.eastOf = eastOf
exports.westOf = westOf
exports.dump = dump
exports.getObject = getObject
