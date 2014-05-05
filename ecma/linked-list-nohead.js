// Assignment: Use the three functions: push, pop and dump to implement a linked
// list structure with no dummy node at the head, using the five basic concepts
// of functions, lowest-common denominator.
//
// Five components: Name, parameters/arguments, body, scope/stack, return value.
//
// Recall the difference between variables and properties:
//
// Variables are numbers, strings, or references. Variables have scope. If a
// variable is declared in a function it is local and exists only within the
// function. Variables without a specified value are undefined.
//
// A property is an association between a name and a value/reference that is
// part of the object. Properties may be inherited or passed between variables


var first = null
var second = null
var third = { value: 37, next: { value: 12 } }

function dump (list) {
    var node = list
    while (node) {
        if (node) {
            console.log(node)
        }
        node = node.next
    }
}

function push (object, value) {
    return { value: value, next: object }
}

function pop (object) {
    return object.next
}

first = push(first, 12)
first = push(first, 37) //{ value: 37, next: {value: 12, next: {null}}}
first = push(first, 99)
first = pop(first)
dump(first)
