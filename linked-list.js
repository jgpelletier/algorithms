//var list = { value: null, next: null}

function create (list) {
   var list = { value: null , next: null }
   return list
}

function dump (list) {
    var list
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
    var list
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
    var list
    var node = list
    var prev
    while (node.next) {
        prev = node
        if (node.value == after) {
            prev.next = { value: value, next: prev.next }
            break
        }
        node = node.next
    }
}

function remove (list, value) {
    var list
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
    var list
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

// write a paragraph, or so, about "function basics", name the five things a
// function.

// contains: returns true if the value is in the list, false if not.
// length: returns the length of the list.
// count: returns the number of times a value exists in list.
function (list, count) {
}

// unshift: adds to the end of the list.

var list1 = create()
var list2 = create()

// Funcionts have: Function name, variables, arguments names, body, scope, and a
// retnrn value
//console.log()
console.log('----list1-----')
console.log(list1)
console.log('----list2----')
console.log(list2)

// may need to replace the create() with function. Maybe not! It may be a named
// function expression.

// below this comment you will add no new *lines* of code, that is no new
// *statements*.

// list 1
dump(list1)
push(list1, 12)
push(list1, 99)
push(list1, 37)
dump(list1)

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
push(list2, 37)
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
