var fs = require('fs')

function main () {
    var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
    lines.forEach(function (line) {
        // replace this logging statement.
        // convert the line to an railroad station object.
        // print the object here.
        console.log(line)
    })
}

main()
