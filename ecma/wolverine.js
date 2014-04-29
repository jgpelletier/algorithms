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

// todo: think really hard about that, change to `1`, change to `null`.
var mcrr = linkedList(lines)
dump(mcrr)

function eastOf (linkedlist, stop, east) {
    var node = linkedlist
        if (node.city == stop) {
            return util.inspect(node, null, east, true)
        } else {
            while (node.east) {
                node = node.east
                if (node.city == stop) {
                return util.inspect(node, null, east, true)
            }
        }
    }
}

console.log(eastOf(mcrr, 'Kalamazoo', 2))
console.log(eastOf(mcrr, 'Birmingham', 3))
console.log(eastOf(mcrr, 'Chicago', 15))
