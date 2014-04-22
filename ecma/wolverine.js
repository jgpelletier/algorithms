var fs = require('fs')
var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
var pop = lines.pop()
//console.log(lines)

function objectFrom(string) {
    string = string.split(',')
    var object = { station: string[0].trim(), city: string[1].trim(), state: string[2].trim() }
    return object
}

function objectify(array) {
    for ( i = 0; i < array.length; ++i) {
        array[i] = objectFrom(array[i])
    }
    return array
}

lines = objectify(lines)

console.log(lines)
