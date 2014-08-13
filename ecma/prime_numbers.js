// This creates a linked list with each node value representing a prime number.

var i = 3
var zeroes = 0
var x
var list = {value: null, next: null}
var node = {}
var target = 13195

var sqrRt = Math.sqrt(i)
var whole = Math.ceil(sqrRt)

function create (list) {
   var list = { value: null , next: null }
   return list
}

function dump (list) {
    var node = list
    while (node){
        if (node.value != null) {
            console.log(node.value)
        }
        node = node.next
    }
}

function push (list, value) {
    var node = { value: value, next: list.next }
    list.next = node
}

list = create(list)
push(list, 1)
push(list, 2)

for ( i; i < target; i++) {
    sqrRt = Math.sqrt(i)
    whole = Math.ceil(sqrRt)

    x = 1
    for (x; x <= i; x++) { // <- the while num
        if (i%x == 0) {
            zeroes++
            if (zeroes >= 3 || x == whole) {
                break
            }
            else if (x == i) {
                push(list, i)
            }
        }
    }

    zeroes = 0

}

dump(list)
