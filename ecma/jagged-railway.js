var fs = require('fs')

function main () {
    var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
    var popped = lines.pop() // <- pops empty line

    // We are going to create a linked list.
    var head = {}

    lines.forEach(function (line) {
        // INSTRUCTIONS:
        // replace this logging statement.
        // convert the line to an railroad station object.
        // print the object here.

        // The function below is delcared every time `forEach` invokes the
        // anonymous function, but it does not use anything from the enclosing
        // scope, so it does not need to be defined here. It should be defined
        // outside of `main`.
        //       vvv
        function object (line) { // function to convert the line to a railroad station object
                var string = line.split(',')
                return {
                    station: string[0].trim(),
                    city: string[1].trim(),
                    state: string[2].trim()
                }
        }

        // Fix the above and then continue. If you check it all in at once you
        // are a bad programmer.

        var userObject = object(line) // <- convert the line to a railroad station object
        console.log(userObject) // <- replaced the logging statement and prints object


        // Append the item to the linked list creating an `east` and `west`
        // link. The node will contain the object, it does not know or care what
        // the object is about.
        var node = { object: object }
        // Now link below.
    })
}

main()
