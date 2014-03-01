function explode (list) {
    var util = require('util')
    return util.inspect(list, false, null)
}

var list // <- list is undefined

var node = {}
node.value = 1
node.next = list

console.log(node.next) // <- undefined
console.log(!! node.next) // <- true or false -> false
console.log('next' in node) // <- true

console.log(Object.keys(node)) // <- [ 'value', 'next' ]

if (false) { // <- is this true?
    console.log('here\'s the truth!')
}

if (node.next) { // <- is there an object here?
    console.log('here\'s an object')
}

console.log(!! node)  // <- true or false? -> true

list = node

console.log(!! list)  // <- true or false? -> true

console.log(list.value) // <- 1
console.log(list.next)  // <- undefined
console.log(!! list.next)  // <- true or false? -> false

node = {}
console.log(list.value) // <- 1
node.value = 5
console.log(!! list)  // <- true or false? -> true
node.next = list
console.log(!! node.next) // <- true or false? -> true
list = node

console.log(list.value) // <- 5

console.log(!! list.next) // <- true or false? -> true

console.log(list.next.value) // <- is value defined? if so?

node = {}
node.value = 7
node.next = list
list = node

node = {}
node.value = 11
node.next = list
list = node

node = {}
node.value = 15
node.next = list
list = node

node = {}
node.value = 19
node.next = list
list = node

node = {}
node.value = 23
node.next = list
list = node

function add27ToTheList () {
    node = {}
    node.value = 27
    node.next = list
    list = node
}

add27ToTheList ()

function add (value) { // <- push
    node = {} // <- O(1)
    node.value = value
    node.next = list
    list = node
}

add(31)
add(35)

console.log('EXPLODE!')
console.log(explode(list))

var node = list
while (node) {
    if (node.value <= 19) {
        console.log(node.value)
    }
    node = node.next
}

function print_below (value) {
    var node = list
    while (node) { // <- O(n)
        if (node.value <= value) {
            console.log(node.value)
        }
        node = node.next
    }
}


print_below(23)

function print_last () {
    var node = list
    while (node) { // <- truthy/falsey
        if (!node.next) { // <- just truthy/falsey something on this line
            console.log(node.value)
        }
        node = node.next
    }
} // <- implicit return of `undefined`

console.log("----------")
print_last()

function get_last () {
    var node = list
    while (node) { // <- truthy/falsey
        if (!node.next) {
            return node.value
        }
        node = node.next
   }
}

console.log("----------")
console.log(get_last()) // <- 1


function get_count () {
    var node = list
    var count = 1
    while (node){
        if (!node.next) {
            return count
        }
        node = node.next
        count++
   }
}

console.log("----------")
console.log(get_count()) // <- ?

node = {} // <-

value = 10

function contains (value) {
    var node = list
    while (node) { // <- O(n)
        if (node.value == value) {
            return true
        }
        node = node.next
    }
    return false
} // <- ends


console.log("----------")

console.log(list.value) // <- 35
console.log(contains(19)) // <- true
console.log(value) // <- ?
console.log(contains(18)) // <- false

console.log(list.value) // <- 35
console.log('count: ' + get_count())

// undo this. link into the list, or push onto a stack
node = {}
node.value = 39
node.next = list
list = node

print_below(Infinity)

console.log('count: ' + get_count())
console.log(list.value) // <- 39
console.log(list.value) // <- 39
console.log(contains(39)) // <- true or false?

// undo the above. unlink from the list, or pop off a stack
list = node.next  // { value:35 , next:list } // node.next.next.next.next.next.next.next.next.next.value

console.log('count: ' + get_count())
console.log(list.value) // <- 35
console.log(list.next.value) // <- 31
console.log(contains(39)) // <- false?

node = {} // <-
node.value = 43
node.next = list
list = node

console.log(contains(43)) // <- true

// remove a node from the front of the list.
function pop () { // <- O(1)
}

// remove the last node in list the front of the list.
function shift () { // <- remove the last item
}

print_below(Infinity)
pop()
print_below(Infinity)
shift()
print_below(Infinity)

process.exit(0)

console.log(contains(-7)) // <- false

process.exit(0) // <- done

add(19) // <- O(1)
print_below(Infinity)

// remove the first occurance of a value from the list, and return true if the
// value was found and removed, false if it was not.
function remove (/* ? */) { // <- O(n)
}

console.log(remove(18)) // false
console.log(remove(19)) // true
console.log(list.value) // 43
console.log(remove(19)) // true
console.log(remove(19)) // false
console.log(remove(19)) // false

function goThreeNodes () {
    var iter = list, count = 0
    while (iter) { // <- Not O(1)
        if (count == 3) {
            return iter.value
        }
        iter = iter.next
    }
}

console.log(list.next.next.value) // <- this
