var object = {
    name: 'value'
}

console.log(object.name)

var nested = {
    child: {
        name: 'value'
    }
}

console.log(nested.child.name) // <- get child then name

var node = {
    next: null,
    value: 1
}

console.log(node.value)

node.next = node

console.log(node.next.value) // <- get next then value
console.log(node.next.next.value) // <- get next then next then value
console.log(node.next.next.next.value) // <- get next then next then next then value

var append = {
    value: 2
}

console.log(append.value == 2)
node.next = append

console.log(node.value)
console.log(node.next.value) // <- the value of the property "value" of object
                             //    referenced by the property "next" of the object
                             //    referenced by the variable "node".

node.next.value = 3
console.log(append.value == 2)
console.log(append.value)

console.log(Object.keys(append))
console.log(Object.keys(node))

node.next.next = null
console.log(Object.keys(node))
console.log(Object.keys(append))

console.log(node.value)
console.log(node.next.value)
try {
    console.log(node.next.next.value)
} catch (e) {
    console.log(e.message)
}

console.log(node.value)
console.log(node.fred) // <- why no error?
try {
    console.log(node.fred.barney) // <- why does this error?
} catch (e) {
    console.log(e.message)
}

function createList () {
    return {}
}

var flintstones = createList() // <- where is there

function addToList(list, value) {
    var node = { value: value, next: ( list.next ) } // <- value: 'Fred', next: undefined
    list.next = node
    console.log(list.next == null)
}

addToList(flintstones, 'Fred')

console.log(flintstones.next == null)

console.log(flintstones.value)
console.log(flintstones.node)

console.log(flintstones.next.value)
