// terminates always at the end, tests every node
function print_below (value) {
    var node = list
    while (node) {
        if (node.value <= value) {
            console.log(node.value)
        }
        node = node.next
    }
}

function copy (object) {
    var other = object
    return other
}

// terminates always at the end
function dump () {
    var node = list
    while (node) {
        console.log(node.value)
        node = node.next
    }
}

// terminates early upon finding or at the end
function contains (value) {
    var node = list
    while (node) {
        if (node.value == value) {
            return true
        }
        node = node.next
    }
    return false
}

// terminates always at the end
function get_count () {
    var node = list
    var count = 1
    while (node) {
        if (!node.next) {
            return count
        }
        node = node.next
        count++
    }
}

function w () {
    var x = list
    var z = 1
    while (x) {
        if (!x.next) {
            return z
        }
        x = x.next
        z++
     }
 }


// alters the list structure, always the head of the list.
//      note: this function is broken, but it works
function pop () {
    list = list.next
}

// removes from the end of a list of two or more items. Need to keep track of
// the previous.
function shift () {
    var node = list
    var prev
    while (node) {
        prev = node // <- WTF?
        if (!list.next.next) {
            node = prev
        }
        node = node.next
    }
}

// return the value of the last node
function last_x () {
    var person = { name: 'Josh' }
    var node = list
    var prev
    while (node) { // always true
        prev = node
        if (!node.next) {
            // What is prev in case?
            return prev.value
        }
        node = node.next
    }
}

// does this always work for list != null
function last () {
    var node = list
    var prev
    while (node) {
        // enter this loop
        prev = node
        node = node.next
    }
    // prev == null ?
    // what is prev? type? -> object -> a node, value? -> 37 next? -> undefined
    return prev.value
}

function last_other () {
    var node = list
    while (node) {
        if (!node.next) {
            return node.value
        }
        node = node.next
    }
}

var list // <- list

var node = {}
node.value = 1
node.next = list
list = node

node = {}
node.value = 5
node.next = list
list = node

node = { /* this dude */ } // <- allocates memory, only four
node.value = 7
node.next = list
list = node

node = {} // <- temporary
node.value = 11
node.next = list
list = node // <- assignment

node = null

console.log(list.next.value) // <- still couldn't see it
list = list.next // <-

console.log('count: ' + get_count())
console.log(list.value) // <- 11
console.log(list.next.value) // <- 7
console.log(contains(11)) // <- true or false?
console.log(' ')

console.log(list)
console.log('--- dump ---')
dump()
console.log('--- last ---')
console.log(last())

console.log('--- shift ---')
shift()
console.log(last())

process.exit(0) // <- EXIT!

pop()

console.log('count: ' + get_count())
console.log(list.value) // <- 7
console.log(list.next.value) // <- 5
console.log(contains(11)) // <- false?
console.log(' ')

pop()

console.log('count: ' + get_count())
console.log(list.value) // <- 5
console.log(list.next.value) // <- 1
console.log(contains(7)) // <- false?
console.log(' ')

pop()

console.log('count: ' + get_count())
console.log(list.value)
console.log(list.next)
