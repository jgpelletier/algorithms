var fs = require('fs')
var list = require('./list')



function main () {
    var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
    var popped = lines.pop()
    //var count = 0
    lines.forEach(function (line) {
        // replace this logging statement.
        // convert the line to an railroad station object.
        // print the object here.
        // var userObject = list.objectFrom(line)
        ///*

        function object (line) {
                var string = line.split(',')
                //count ++
                return {
                    station: string[0].trim(),
                    city: string[1].trim(),
                    state: string[2].trim()
                }
        }

        var userObject = object(line)
        console.log(userObject)

        // console.log(count)
        // */
        //console.log(line)
    })
}

main()
