function print_below (value) {

    while (node) {
        if (node.value <= value) {
            console.log(node.value)
            }
            node = node.next
    }
}

function print_last () {
    var node = list
    while (node) {
        if (!node.next) {
            console.log(node.value)
        }
        node = node.next
    }
}

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


function pop () {
    list = node.next
    node = node.next
}

var list

var node = {}
node.value = 1
node.next = list
list = node

node = {}
node.value = 5
node.next = list
list = node

node = {}
node.value = 7
node.next = list
list = node

node = {}
node.value = 11
node.next = list
list = node


console.log('count: ' + get_count())
console.log(list.value) // <- 11
console.log(list.next.value) // <- 7
console.log(contains(11)) // <- true or false?
console.log(' ')

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
console.log(list.value) // <-
console.log(list.next) //
