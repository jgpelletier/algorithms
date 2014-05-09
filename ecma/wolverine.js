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

//functions to change from linked list to array

function pop (object) {
    return object.east
}

function shift (list) {//
    var node = list
    var prev
    while (node.east) {
        prev = node
        node = node.east
    }
    delete prev.east
    return node
}

function section (object, city) { //this does not change mcrr
    var list = object
    while (list) {
        if (list.city == city) {
            return list
        }
        list = list.east
    }
}

function length (linkedlist) {
    var list = linkedlist
    var count = 0
    while (list) {
        if (!list.east) {
            return count
        }
        list = list.east
        count++
    }
}

function toArr (linkedlist) {//this changes mcrr. How come?
    var list = linkedlist // I am changing properties so this is affected
    var count = length(list)
    var array = []
    for (var i = 0; i < count; ++i) {
           // console.log('----in for loop before shift----')
           // dump(mcrr)
            array[i] = shift(list)
           // console.log('----in for loop after shift----')
           // dump(mcrr)
        }
    return  array
}

var mcrr = linkedList(lines) //creation of the linkedlist

function eastOf (linkedlist, stop, east) {
      var list = linkedlist
      var sec = section(list, stop)
      var arr = toArr(sec)
      var trainCard = arr.reverse().slice(1, (east+1))
      return trainCard
    }

//var nextStops = eastOf(mcrr, "Kalamazoo", 2)
//console.log(nextStops)
//console.log(eastOf(mcrr, "Kalamazoo", 2)) //why does this not work?
//dump(mcrr)
//var sectn = section(mcrr, 'Kalamazoo')
//console.log('----RIGHT AFTER SECTION-----')
dump(mcrr)//dumps the whole mcrr linked list
shifted = shift(mcrr)
shifted = shift(mcrr)
console.log(shifted)
//console.log('----RIGHT BEFORE toArr-----')
//var anArr = toArr(sectn)//this is where mcrr changes
//dump(mcrr)//changes the list so Kalamazoo is the last stop
dump(mcrr)
//console.log(shifted)
//console.log(anArr)
//console.log(Array.isArray(anArr))
//console.log(anArr.length)
//anArr.reverse()
//console.log(anArr)
//var popped = anArr.pop()
//console.log(popped)
//console.log(sectn)
//mcrr = pop(mcrr)
//pop(mcrr)//this does not give me anything.
//dump(mcrr)
//sec(mcrr, 'Kalamazoo') // <-useless
//dump(mcrr)
//console.log(length(sectn))
//dump(sectn)
//shift(mcrr)// return a list without last node
//dump(mcrr)
//lastNode = shift(mcrr)//lastNode holds the shifted object
//dump(mcrr)
//console.log(lastNode)
