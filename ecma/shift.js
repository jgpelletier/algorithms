// terminates always at the end
function dump () {
    var node = list
    while (node) {
        console.log(node.value)
        node = node.next
    }
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

var list // <- list this is an undefined variable.

var node = {}
node.value = 37
node.next = list
list = node

node = {}
node.value = 99
node.next = list
list = node

node = { /* this dude */ } // <- allocates memory, only four
node.value = 12
node.next = list
list = node

node = {}
node.value = null
node.next = list
list = node

// list.next ?
node = null

// does this always work for list != null
function second_to_last () {
    var node = list
    var prev
    while (node.next) { // <- test?
        // enter this loop
        prev = node
        node = node.next
    }
    // prev == null ?
    // what is prev? type? -> object -> a node, value? -> 37 next? -> undefined
    return prev.value
}
// Shift will only work with two nodes. How do we make it work with one node?
// With only one node, the function never enters the while loop and it throws an
// error bc prev is undefined.
function shift () {
    var node = list
    var prev
   if (!node) {
    console.log('No node to shift')}
   else if (!node.next) {
    console.log('blerp')
    list = undefined} // changing variable
   else {
     while (node.next) { // This is my test but with one node we fail this test and proceed to delete.
            console.log("herp")
            prev = node
            node = node.next // changing property
            }
         console.log('derp')
         delete prev.next // <- new javascript
       }
}


dump()
console.log('--- 2nd to last ---')
console.log(second_to_last())
console.log('--- shifted ---')
shift()
dump()
console.log('---shift again---')
shift()
dump()
console.log('---shift a 3rd time---')
shift()
dump()
shift()
