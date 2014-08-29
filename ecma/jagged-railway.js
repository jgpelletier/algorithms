var fs = require('fs')

function main () {
    var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
    var popped = lines.pop() // <- pops empty line
    lines.forEach(function (line) {
        // INSTRUCTIONS:
        // replace this logging statement.
        // convert the line to an railroad station object.
        // print the object here.

        function object (line) { // function to convert the line to a railroad station object
                var string = line.split(',')
                return {
                    station: string[0].trim(),
                    city: string[1].trim(),
                    state: string[2].trim()
                }
        }

        var userObject = object(line) // <- convert the line to a railroad station object
        console.log(userObject) // <- replaced the logging statement and prints object
    })
}

main()
