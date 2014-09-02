var fs = require('fs')
var util = require('util')

function dump (list) { // <- dump
    console.log(util.inspect(list, null, null))
}
 /*
if (!head) {
head = userObject
tail = userObject
} else {
count ++
tail.east = userObject
userObject.west = tail
tail = tail.east
}
// ^^^ Nice, but...
*/
function goEast (list, node) {
  var prev = list
  if (!list.east) {
    list.east = node
    node.west = list
  } else {
    goEast(list.east, node)
  }
}

// ^^^ ... do this instead. Create a function that will walk to
// the end of the list and append the node.

// The function below is declared every time `forEach` invokes the
// anonymous function, but it does not use anything from the enclosing
// scope, so it does not need to be defined inside the forEach function.
// It should be defined outside of `main`.
//       vvv
function object (line) { // function to convert the line to a railroad station object
        var string = line.split(',')
        return {
            station: string[0].trim(),
            city: string[1].trim(),
            state: string[2].trim()
        }
}

function main () {
    var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
    var popped = lines.pop() // <- pops empty line

    // We are going to create a linked list.
    var head

    // converts the line to an railroad station object and prints the object.
    lines.forEach(function (line) {
        var userObject = object(line) // <- convert the line to a railroad station object
        var node = { object: userObject }
        node.east = null
        node.west = null
        //console.log(node)
        // I said very clearly, at some point at least, that the user object was
        // going to be stored in a property of the node. It will not be the node
        // object itself. vvv
        //var userObject = object(line) // <- convert the line to a railroad station object
        if (!head) {
            head = node
        } else {
            goEast(head, node)
        }


        // TODO:
        // Append the item to the linked list creating an `east` and `west`
        // link. The node will contain the object, it does not know or care what
        // the object is about.
        // EXAMPLE - var node = { object: object } // <- this variable is within anonynmous function scope
        //var node = userObject
        // Now link below
    })
    dump(head)
    //console.log(count)
}

main()
