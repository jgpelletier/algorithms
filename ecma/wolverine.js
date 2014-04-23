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

function list(array) {//This function pops of each object and assigns it to list. List is replaced each pass.
    var count = array.length //need a count variable.
    for (var i = 0; i < count; i++) { // I need a function in the loop to return a value each pass
         var node = array.pop()
         var list = node.east
         console.log(list,i)// console.log shows the object referenced by list.
    }
    return list //this only returns the final object
}

lines = objectify(lines)
list = list(lines) // currently this is only the last object.
//list = list(lines) // here there is nothing to pop and return.

//one = lines.pop()
console.log(list)
//console.log(typeof object, object.constructor.name) //object Object
