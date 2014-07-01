// linked list functions. They are exported, and used in railway.

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

// originally I looked to add west to add an additional property to each object
// this was the wrong defintion of member.
function map (list, f) { //available in map and anonymous founctions
    // returns an array that applys `f` to every member of the list.
    // In OOP members refer to properties and methods)
    // convert the node to an object for the user.
    var station
    var arr = []
    while (list) {
        arr.push({
            state: list.state,
            city: list.city,
            station: list.station,
        })
        list = list.east
    }
    //console.log(arr)

    return function (f) {// inner function has accesss to outer parameters
        return station = arr.map(f)
    }
}

exports.objectFrom = objectFrom
exports.objectify = objectify
exports.link = link
exports.linkedList = linkedList
exports.addWest = addWest
exports.map = map
