var fs = require('fs')
var util = require('util')
var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')

function dump (list) {
    console.log(util.inspect(list, 1, true))
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

function length (linkedlist) {
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


function eastOf (list, stop, count) {
    var arr = [] // <- this is a declaration, not a subscript
    var lngth = length(list)
    //var list = linkedlist
    var i
    if (count > lngth) {
        return "There are not this many stops."
    }
        while (list && list.city != stop) {
            list = list.east
        }
        if (!list && list != stop) {
            return 'Stop not found'
        }
        else if (list.city == stop) {
            for (i = 0; i < count; i++) {
                var node = list.east
                list = list.east
                arr.push({
                    state: node.state,
                    city: node.city,
                    station: node.station,
                })
            }
        return arr
        }
}

// Major assignment.

// NOT going to change the structure of the list.
// Do not use array subscripts.
function __westOf (linkedList, stop, count) {
    // You will only add code between these braces.
    var arr = []
    var arr2 =[]
    var list = linkedList
    var prev
    var i = 0
    while (list && list.city != stop) {
       prev = list
       list = list.east
       arr[i++] = prev
    }
    if (list.city == stop && count < i) {
        element = arr[i-(count)]
        for (var j = 0; j < count; j++) {
            arr2.push(element.station, element.city, element.state)
            element = element.east
        }
    }
    return arr2
}

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


var eastOfKalamazoo = eastOf(mcrr, "Kalamazoo", 2)
//console.log(eastOfKalamazoo[1].city) // <- Albion
console.log(isCityEastOf(mcrr, "Kalamazoo", 4, "Battle Creek"))

var eastOfKalamazoo = eastOf(mcrr, "Kalamazoo", 2)
console.log(eastOfKalamazoo) // <- Albion

// FIX THIS.
console.log(eastOf(mcrr, "Kalamazoo", 999))
console.log(eastOf(mcrr, "Boston", 2))

process.exit(0)

var eastOfKalamazoo = eastOf(mcrr, "Kalamazoo", 2)
//dump(eastOf(mcrr, "Kalamazoo", 2))
eastOfKalamazoo[0] // <- Battle Creekish
//dump(eastOfKalamazoo[1]) // <- Albionish

console.log(eastOfKalamazoo.length)
console.log(isCityEastOf(mcrr, "Kalamazoo", 4, "Battle Creek")) // exact match
console.log(isCityEastOf(mcrr, "Kalamazoo", 4, "Detroit")) // exact match
console.log(isCityEastOf(mcrr, "Kalamazoo", 4, "Niles")) // exact match
console.log(isCityEastOf(mcrr, "Kalamazoo", 4, "Jackson")) // exact match

console.log(isStateEastOf(mcrr, "Kalamazoo", 4, "Michigan"))
console.log(isStationEastOf(mcrr, "Kalamazoo", 4, "Jackson Station"))
//console.log(isCityEastOf(mcrr, "Kalamazoo", 4, "Niles"))
process.exit(0)

console.log(isEastOfEx(mcrr, "Kalamazoo", 4, "state", "Michigan"))
console.log(isEastOfEx(mcrr, "Kalamazoo", 4, "station", "Jackson Station"))

console.log(eastOfKalamazoo.length)
console.log(typeof(eastOfKalamazoo))
console.log(eastOfKalamazoo)

//var station = eastOfKalamazoo[????]???????????

//console.log(eastOf(mcrr, "Kalamazoo", 2))
console.log(westOf(mcrr, "Kalamazoo", 2))
//console.log(toArray(mcrr))

///dump(mcrr)//changes the list so Kalamazoo is the last stop
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
