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

function node (array) { // shifts an object from the array so it referenced by the variable node.
    node = array.shift()
    return node
}


//simple steps: what would be the most simple thing to do next?

lines = objectify(lines)
//.node = shift(lines)
//console.log(node) // is an object
//console.log(lines) // first element shifted
node = node(lines)
//list = list(lines)
console.log(list)
console.log(lines)
