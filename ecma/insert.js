// This push a node onto a linked list.

function dump () {
    var node = list
    while (node) {
        console.log(node.value)
        node = node.next
    }
}

function push (value) {
    node = { value:value, next:list.next } // this reference points past the dummy node.
    list.next = node
}

// implement remove.
function insert (value, after) {
   var node = list
   var prev
   while (node.next) {
       prev = node
       if (node.value == after) {
           prev.next = {value:value, next:prev.next}
           break
       }
       node = node.next
    }
}

var list// = ??? // <- list again, as other.

var node = {}
node.value = 37
node.next = list
list = node

node = {}
node.value = 99
node.next = list
list = node

node = {}
node.value = 12
node.next = list
list = node

node = {}
node.value = null
node.next = list
list = node

dump()
console.log('--- push 5 ---')
push(5)
dump()
console.log('--- push 100---')
push(100)
dump()
console.log('---insert 33 after 5 ---')
insert(33, 5)
dump()
insert(12, null)
dump()
