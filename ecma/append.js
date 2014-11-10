var list = {}

console.log(list.next) // undefined

try {
    console.log(list.next.value)
} catch (e) {
    console.log('caught error: ' + e.message)
}

console.log(Object.keys(list)) // <- []

console.log(list.next) // undefined

list.next = null

console.log(list.next) //null

console.log(Object.keys(list)) // <- [ 'next' ]

try {
    console.log(list.next.value)
} catch (e) {
    console.log('caught error: ' + e.message)
}

list.next = { value: 1 }

console.log(Object.keys(list)) // <- [ 'next' ]
// { next: { value: 1 } }
console.log(Object.keys(list.next)) // <- [ 'value' ]

console.log(list.next.value) // 1

console.log(list.next.fred) // undefined
try {
    console.log(list.next.fred.barney.betty.wilma)
} catch (e) {
    console.log('caught error: ' + e.message)
}

console.log(list.next.next)

try {
    console.log(list.next.next.value)
} catch (e) {
    console.log('caught error: ' + e.message)
}

list.next.next = { value: 2 }

console.log(Object.keys(list)) // <- [ 'next' ]
console.log(Object.keys(list.next.next)) // <- [ 'value' ]

console.log(Object.keys(list.next)) // <- [ 'value', 'next' ]
console.log(! list.next.next) // <- ! undefined
console.log(list.next.value) // <- 1
console.log(list.next.next.value) // <- 2 <- a good line
// { next: { value: 1, next: { value: 2 } } }
               // ^----<-----v

try {
    console.log(list.next.next.next.value)
} catch (e) {
    console.log('caught error: ' + e.message)
}

console.log(Object.keys(list.next))

list.next.next.next = { value: 5 }

console.log(Object.keys(list.next)) // <- [ 'next', 'value' ]
console.log(Object.keys(list.next.next))  // <- [ 'next', 'value' ]
console.log(Object.keys(list.next.next.next))  // <- [ 'value' ]

console.log(list.next.next.next.value)

var x = list
var count = 0

while (x.next) {
    count = count + 1
    console.log(count, x.next)
    x = x.next
}

console.log(count)
