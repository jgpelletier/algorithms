var fs = require('fs')
var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
var pop = lines.pop()
//console.log(lines)

function objectFrom(string) {
    string = string.split(',')
    var object = { station: string[0].trim(), city: string[1].trim(), state: string[2].trim(), east: object }
    return object
}

function objectify(array) {
    for ( var i = 0; i < array.length; ++i) {
        array[i] = objectFrom(array[i]) //< objectFrom function with string parameter
                                        //  inside objectify function which has
                                        //  an array paramter.
    }
    return array
}

function shift (array) {
    var object = array.shift
    return object
}

function push (array) {
    return array.shift()
}

//object = lines.pop()

function list(array) {
    //for (var i = 0; i < array.length; i++) {
    //var list = push(array)
    //list.next = list
    //}
        list = array.shift()
        list.east = array.shift()
        list.east.east = array.shift()
   // }
    return list
}

lines = objectify(lines)
list = list(lines)
//one = lines.pop()
console.log(list)
//console.log(typeof object, object.constructor.name) //object Object
