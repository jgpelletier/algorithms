var fs = require('fs')
var util = require('util')
var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')


function dump (list) {
    console.log(util.inspect(list, null, null, true))
}

function objectFrom (string) { //converts string into object
    string = string.split(',')
    var object
    return { station: string[0].trim(), city: string[1].trim(), state: string[2].trim(), east: object }
}

function objectify (array) { // converts string.Object element into Object element.
    for (var i = 0; i < array.length-1; ++i) {
        array[i] = objectFrom(array[i])
    }
    return array
}

function link (list, array) {
    var newNode = array.pop()
    if (!list) {
        list =  newNode
    } else {
        newNode.east = list
    }
    return newNode
}

function linkedList (array) {
    var count = array.length
    var lines = objectify(array)
    for (var i = 0; i < count; i++) {
       var list = link(list, lines)
    }
    return list
}

function pop (object) {
    return object.east
}

function sec (object, city) {
    var list = object
    var toSection
    console.log(Object.keys(list))
    while (list) {
        console.log('in while loop')
        if (list.city == city) {
            console.log('in if statement')
            return list
        }
        list = list.east
    }
}


var mcrr = linkedList(lines)
mcrr = pop(mcrr)
dump(mcrr)
mcrr = sec(mcrr, 'Kalamazoo')
dump(mcrr)





// Returns an array, next `n` stops east of `stop`.
// The function takes three parameters. It must take a copy
// of the object and manipulate the shape to fulfill the assignment.
// I must use the levels of indirection that exist in the architecture.
function eastOf (linkedlist, stop, east) {
    var list = linkedlist
    var arr = [] // I think an array is needed
    for (var i = 0; i < east; i++) { //need a mechanism to manipulate object in list
    arr [i]
    return arr
    }
}

//console.log(eastOf(mcrr, 'Kalamazoo', 2))



//console.log("Get Own Property Description\n", Object.getOwnPropertyDescriptor(mcrr, "east"))
//console.log("--------------")
//console.log("Get Own Property Name\n", Object.getOwnPropertyNames(mcrr))
//console.log("--------------")
//console.log("Get Prototype of\n", Object.getPrototypeOf(mcrr))//{}
//console.log("--------------")
//console.log("Is Extensible\n", Object.isExtensible(mcrr))//true
//console.log("--------------")
//console.log("Is Frozen\n", Object.isFrozen(mcrr))//false
//console.log("--------------")
//console.log("Is Sealed\n", Object.isSealed(mcrr))//false
//console.log("--------------")
//console.log("Keys\n", Object.keys(mcrr)) //['station', 'city', 'state', 'east' ]
//console.log("--------------")
//console.log("Has Own Property\n", mcrr.hasOwnProperty("east"))//true
//console.log("--------------")
//console.log("Is Prototype Of\n", Object.isPrototypeOf(mcrr))//false
//console.log("--------------")
//console.log("Is Enumerable\n", Object.propertyIsEnumerable("city")) //false
//console.log("--------------")
//console.log("To Locale String\n", mcrr.toLocaleString())
//console.log("--------------")
//console.log("To String\n", mcrr.toString())
//console.log("--------------")
//console.log("Value Of \n", mcrr.valueOf())//returns primative value: object
//dump(mcrr)
