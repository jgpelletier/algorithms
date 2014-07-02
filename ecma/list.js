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
    // returns an array that applys `f` to every member of the list.
    // convert the node to an object for the user.

// To think about:
    // What state am I trying to create?
    // map is a function that takes a linked list object and returns a function.
    // the function it returns has one parameter. that parameter is be applied
    // to every member of the list.
    //
    // Define Member: In OOP members refer to properties and methods.
    // Each property in my list is a member
    //
    //  list and arr are 2
    // possible variables that may be captured by the inner function
function map (list/* may be captured */, f) {
    var arr = []// may be captured
    while (list) {
        arr.push({
            station: list.station,
            state: list.state,
            city: list.city
        })
        list = list.east
    }
    // ^^ the above code gives me an array containing objects with the
    // properties station, state, and city. These are my members.  Uncertain
    // if it better fits here or in the function below.
    return function (f) {// f is what is applied to each member
        // what goes in this function so f is mapped to each member
        // and station.city and station.state are returned
        // var mapped = (arr.map(f)) // <- is an undefined function.

        return //mapped // what am I returning
    }
}

exports.objectFrom = objectFrom
exports.objectify = objectify
exports.link = link
exports.linkedList = linkedList
exports.addWest = addWest
exports.map = map
