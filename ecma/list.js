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


// Assignment
    // map(list, f)
    //
    // The argument `f` is a function.
    //
    // Return an array.
    // For each item in the list, call `f`.
    //          then add the return value to the array.
    //
    // For each element in the list, call `f` with the element as an argument,
    // then push the return value of `f` onto an array.
    //
    // Return the array.
    //
    // map is a function that takes a linked list object and returns a function.
    // the function it returns has one parameter. that parameter is be applied
    // to every member of the list.
function map (list, f) {
    var i
    var arr = []
    var station
    while (list) {
        arr.push({
            station: list.station,
            state: list.state,
            city: list.city
        })
        list = list.east
    }
    var length = arr.length
    for (var i = 0; i < length; ++i) {
        element = arr[i]
        return function (object) {//<- object here is local to anonymous function
            object = arr[i].station // this gives me a string
            arr.push(object)// this pushes the string on
        return arr // this returns the array with one string element pushed on
        }()//<- invokes the function
    //return arr // arr is undefined if it is returned here.
    }
}

exports.objectFrom = objectFrom
exports.objectify = objectify
exports.link = link
exports.linkedList = linkedList
exports.addWest = addWest
exports.map = map
