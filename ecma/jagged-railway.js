var fs = require('fs')
var util = require('util')

function dump (list) { // <- dump
    console.log(util.inspect(list, null, null))
}

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
    var count = 0
    // We are going to create a linked list.
    var head
    var tail //<- it may be worth keeping track of this as well.

    // converts the line to an railroad station object and prints the object.
    lines.forEach(function (line) {

        var userObject = object(line) // <- convert the line to a railroad station object
        userObject.east = null
        userObject.west = null

        // faster to carry the tail rather than calling the recursive statement
        // below.
        if (!head) {
            head = userObject
            tail = userObject
        } else {
            count ++
            tail.east = userObject
            userObject.west = tail
            tail = tail.east
        }

        /*
           var node = head
           function goEast (node) {
              if (!node.east) {
                node.east = userObject
                userObject.west = node
              } else {
                count ++ // this iterates 91 times. How to carry the tail
                goEast(node.east)
              }
            }
            goEast(node)
        }
        */

        // TODO:
        // Append the item to the linked list creating an `east` and `west`
        // link. The node will contain the object, it does not know or care what
        // the object is about.
        // EXAMPLE - var node = { object: object } // <- this variable is within anonynmous function scope
        //var node = userObject
        // Now link below
    })
    dump(head)
    console.log(count)
}

main()
