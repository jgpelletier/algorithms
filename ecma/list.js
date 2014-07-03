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
    var arr = []
    return function (f) {
        while (list) {
            arr.push({
                station: list.station,
                state: list.state,
                city: list.city,
            })
            list = list.east
        }
    return arr
    }
}
/*    var i
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
    return function (object) {// <- What is supposed to happen with this parameter, how do I pass in
                              //    station as seen in the map.js file?
        var length = arr.length
        for (var i = 0; i < length; ++i) {
             object = {}
             object[arr[i].station] = arr[i] // this could also be object.station, but that seems wrong
             arr.push(object)
       }
       return arr.slice(-length)
    }//<- () invokes the function and assigns the result of invoking the function to a var.
}
*/
exports.objectFrom = objectFrom
exports.objectify = objectify
exports.link = link
exports.linkedList = linkedList
exports.addWest = addWest
exports.map = map
