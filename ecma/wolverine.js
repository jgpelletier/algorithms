var fs = require('fs')
var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
var pop = lines.pop()


function objectFrom(string) { //converts string into object
    string = string.split(',')
    var object = { station: string[0].trim(), city: string[1].trim(), state: string[2].trim(), east: object }
    return object //I am uncertain about adding the property east to the object now or later
}

function objectify(array) { // converts sting.Object elemen into Object element
    for (var i = 0; i < array.length; ++i) {
        array[i] = objectFrom(array[i])
    }
    return array
}

function  link (object, array) {
    if (!object) {
        console.log("SexMachine")
        object = array.shift()
        return object
    } else {
        while (object) {
            console.log("HotPants")
            if (!object.east) {
                console.log("AintItFunkyNow", object)
                //var node = array.shift()
                object.east = array.shift()
                console.log(object)
                return object
            }
            object = object.east
        //return object
        }
    }
}

//simple steps: what would be the most simple thing to do next?

lines = objectify(lines)
var list = link(list, lines) //SexMachine
console.log(list)
//console.log(lines)
list = link(list, lines)//HotPants AintItFunkyNow
console.log(list)
//console.log(lines)
list = link(list, lines)//HotPants HotPants AintItFunkyNow
console.log(list)
//console.log(lines)
