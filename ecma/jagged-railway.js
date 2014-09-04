var fs = require('fs')
var util = require('util')

function dump (list) {
    console.log(util.inspect(list, null, null))
}

function goEast (list, object) {
    var node = { object: object }
    if (!list.east) {
        list.east = node
        node.west = list
    } else {
        goEast(list.east, object)
    }
}
// This ^^^^  creates a function that will walk to
// the end of the list and append the node.

function object (line) { // function to convert the line to a railroad station object
    var string = line.split(',')
    return {
        station: string[0].trim(),
        city: string[1].trim(),
        state: string[2].trim()
    }
}
// This ^^^ function is declared every time `forEach` invokes the
// anonymous function.  It does not use anything from the enclosing
// scope, so it does not need to be defined inside the forEach function.

function main () {
    var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
    var popped = lines.pop() // <- pops empty line
    var head = { east: null }
    // ^^^ this is the head of the linked list.

    lines.forEach(function (line) {
        var userObject = object(line) // <- converts the line to a railroad station object
        goEast(head, userObject)
        //^^takes the head and the userObject. It creates a node with userObject property.
        //  This node travels to the end of the list, and is linked the to the list by adding
        //  an east property to what has become the second to last node. A west property
        //  is attached to the last node, which links to the node directly proceeding it.
    })

    dump(head)
}

main()
