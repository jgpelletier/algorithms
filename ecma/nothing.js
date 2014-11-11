var list = {}

console.log(list.next) //<- undefined

list.next = 1

console.log(list.next) //<- 1

list.next = null

console.log(list.next) //<- null

try {
    console.log(null.next)
} catch (e) {
    console.log('caught: ' + e.message)
}

var object = null

try {
    console.log(object.next)
} catch (e) {
    console.log('caught: ' + e.message)
}

// compare
console.log(object == null)

var fred

console.log(fred == null) // <- fred is coerced to null

console.log(fred === null) // <- super explicit

console.log(undefined == null)
