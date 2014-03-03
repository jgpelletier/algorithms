// Assignment: Use push, pop and dump functions to implement a linked list
// structure with no dummy node at the head.

var first = null
var second = null
var third = { value: 37, next: { value: 12 } }

function dump (list) { //broken
    var list
    var node = list
    while (node) {
        if (node) {
            console.log(node.value)
        }
        node = node.next
    }
}

function push (list, value) {
    var node = { value: value, next: list.next }
    list.next = node
}

function pop (list) {
}

dump(first)
dump(second)
dump(third)
