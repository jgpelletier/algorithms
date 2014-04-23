var fs = require('fs')
var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
var pop = lines.pop()
var node

function objectFrom(string) { //converts string into object
    string = string.split(',')
    var object = { station: string[0].trim(), city: string[1].trim(), state: string[2].trim() }
    return object
}

function objectify(array) { // converts sting.Object elemen into Object element
    for (var i = 0; i < array.length; ++i) {
        array[i] = objectFrom(array[i])
    }
    return array
}

function shift (array) { //essentially shift method. This may be superfluous.
   return array.shift()
}

function list (array, list) {
    var node = list
    if (node == null) {
        node = shift(array)
    } else {
        while (node) {
            if (node.east == null) {
                node.east == shift(array)
                return list
            }
        node = node.east
        }
   }
}
// pass the properties of the returned object to another variable?

lines = objectify(lines)
//.node = shift(lines)
//console.log(node) // is an object
//console.log(lines) // first element shifted

list = list(lines, list)
console.log(list)
