function create () {
    var list = { next:null } //is this pointer also a head node?
    return list
}

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


list = create()
push(list, 12)
push(list, 39)
dump(list)
