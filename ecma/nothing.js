var list = {}

console.log(list.next)

list.next = 1

console.log(list.next)

list.next = null

console.log(list.next)

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
