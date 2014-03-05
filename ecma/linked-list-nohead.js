// Assignment: Use the three functions: push, pop and dump to implement a linked
// list structure with no dummy node at the head, using the five basic concepts
// of functions, lowest-common denominator.
//
// Five components: Name, parameters/arguments, body, scope/stack, return value.
//
// Recall the difference between variables and properties:
//
// Variables are numbers, strings, or references. Variables have scope. If a
// vaiable is declared in a function it is local and exists only within the
// function. Variables without a specified value are undefined.
//
// A property is an association between a name and a value/reference that is
// part of the object. Properties may be inherited or passed between variables


var first = null   // outer scope. If commented out then push(first, 12) breaks
var second = null  // outer scope.
var third = { value: 37, next: { value: 12 } }

function dump (list) { // <- outer scope is true.
    var node = list
    console.log('list in dump', list === first)
    while (node) {
        if (node) {
            console.log(node.value)
        }
        node = node.next
    }
}

function push (list, value) { // parameters have local scope, yet list === first TRUE. Cant comment out outer var.
//  var list // <- redundant
    var node = {}
    console.log('list is `first`', list === first) // <- what happens?
    node.value = value
    node.next = list  // works if a variable from the outer scope is inserted rather then inner
    list = node // list appears to inherit the properties of node but only locally
    if (list.value) {
        console.log('here is value', list.value) // list.value is true but outer var does not inherit property
    }
    return list
}

function pop (list) {
}


dump(first)
//dump(third)

push(first, 12) //list === first <- TRUE
//dump(first)
//push(third, 37) //list === first <- FALSE
//console.log(first)
console.log("---push function complete---")
dump(first) //Does not push 12
//dump(second)
//console.log(third)
dump(third) //Does not push 37
