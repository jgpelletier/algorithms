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

function pop (list) {
    var node = list
    var prev
    if (!node) {
        console.log('No node to pop')
    } else {
        while (node.next) {
            prev = node
            prev.next = prev.next.next
            break
        }
    }
}

function insert (list, value, after) {
    var node = list
    var prev
    var current
    while (node.next) {
          prev = node
          node = node.next
          if (node.value == after) {
              prev.next = { value: value, next: prev.next }
              break
          }
    }
}


function remove (list, value) {
    var node = list
    var prev
    if (!node) {
        console.log('No node to remove')
    } else {
        while (node.next) {
           prev = node
           node = node.next
           if (node.value == value) {
              prev.next = prev.next.next
              break
          }
       }
   }
}

function shift (list) {
    var node = list
    var prev
    if (!node) {
        console.log('No node to shift')
    } else {
        while (node.next) {
            prev = node
            node = node.next
        }
        delete prev.next
    }
}

// contains: returns true if the value is in the list, false if not.
function contains (list, value) {
    var node = list
    if (!node) {
      console.log('No node')
    } else {
        while (node) {
            if (node.value == value) {
                console.log('True')
                return true
            }
            node = node.next
        }
        console.log('False')
        return false
    }
}


// count: returns the number of times a value exists in list.
function count (list, value) {
    var node = list
    var count = 0
    if (!node) {
      console.log('No node')
    } else {
        while (node) {
            if (node.value == value) {
                count++
            }
            node = node.next
       }
       console.log(count)
       return count
    }
}


// length: returns the length of the list.
function length (list, count) {
    var node = list
    var count = 0
    if (!node) {
      console.log(count)
    } else {
        while (node) {
            if (!node.next) {
                console.log(count)
                return count
            }
            node = node.next
            count++
        }
    }
}

// unshift: adds to the end of the list.
function unshift (list, value) {
    var node = list
    var current
    while (node) {
       current = node
        if (!node.next) {
            current.next = { value: value, next: null }
            break
        }
        node = node.next
    }
}

var list1 = create()
var list2 = create()

// below this comment you will add no new *lines* of code, that is no new
// *statements*.

// list 1
dump(list1)
push(list1, 12)
push(list1, 99)
push(list1, 37)
dump(list1)
insert(list1, 5, 37)
console.log('insert 5 after 37')
dump(list1)
remove(list1, 12)
console.log('remove 12')
dump(list1)
unshift(list1, 12)
console.log('unshift 12')
dump(list1)
console.log('---insert 12 after 12---')
insert(list1, 12, 12)
dump(list1)
process.exit(0)
unshift(list1, 12)
console.log('push 5')
push(list1, 5)
dump(list1)
console.log('insert 100 after 5')
insert(list1, 100, 5)
dump(list1)
console.log('remove 100')
remove(list1, 100)
dump(list1)
console.log('remove 5')
remove(list1, 5)
dump(list1)
console.log('pop')
pop(list1)
dump(list1)
console.log('shift')
shift(list1)
dump(list1)

console.log('--------break--------')

// list2
dump(list2)
push(list2, 12)
push(list2, 99)
dump(list2)
console.log('push 5')
push(list2, 5)
dump(list2)
console.log('insert 100 after 5')
insert(list2, 100, 5)
dump(list2)
console.log('remove 100')
remove(list2, 100)
dump(list2)
console.log('remove 5')
remove(list2, 5)
dump(list2)
console.log('pop')
pop(list2)
dump(list2)
console.log('shift')
shift(list2)
dump(list2)


push(list1, 67) // list1
push(list2, 67) // list2
dump(list1) // list1
dump(list2) // list2

console.log('---contains 99---')
push(list1, 99)
contains(list1, 99)
push(list1, 99)
push(list1, 99)
push(list1, 99)
push(list1, 99)
push(list1, 99)
length(list2)
count(list1, 99)
unshift(list1, 10)
dump(list1)
