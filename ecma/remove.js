function remove (value) {
    var node = list
    var prev
    if (!node) {
        console.log('No node to shift')
    } else {
        while (node.next) {
            prev = node
            node = node.next
            if (node.value == value) {
               prev.next = prev.next.next  //this changes the property
               break // <- can be break
            }
        }
    }
}


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

function add (value) {
    node = {}
    node.value = value
    node.list = list
    list = node
}

var list

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


dump()
console.log('--- remove 13 ---')
remove(13)
dump()
console.log('---remove 12 ---')
remove(12)
dump()
console.log('---remove 99---')
remove(99)
dump()

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


function shift () {
    var node = list
    var prev
    if (!node) {
        console.log('No node to shift')
    }
    else if (!node.next) {
        console.log('blerp')
        list = undefined
    } else {
        while (node.next) {
            console.log("herp")
            prev = node
            node = node.next // changing property
        }
        console.log('derp')
        delete prev.next // <- new javascript
   }
}
