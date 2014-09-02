var fs = require('fs')
var util = require('util')

function dump (list) {
    console.log(util.inspect(list, null, null))
}

function goEast (list, object) {
  var node = { object: object }
  //var node = object
  var prev = list
  if (!list.east) {
    list.east = node
    node.west = list
  } else {
    goEast(list.east, object)
  }
}

// Create a function that will walk to
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
    var head = { east: null }

    // converts the line to an railroad station object and prints the object.
    lines.forEach(function (line) {
        var userObject = object(line) // <- convert the line to a railroad station object
        //var node = { object: userObject }
        //node.east = null
        //node.west = null
        // ^^^ userObject is stored in a property of the node.
        //     east and west are appended to the node

        // vvv this links the list.
        //if (!head) {
        //    head = node
        //} else {
            goEast(head, userObject)
        //}
    })
    dump(head)
}

main()
