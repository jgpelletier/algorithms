null

try {
    null.fred
} catch (e) {
    console.log('caught: ' + e.message)
}

try {
    null.fred = 1
} catch (e) {
    console.log('caught: ' + e.message)
}

var object = null

try {
    object.fred = 1
} catch (e) {
    console.log('caught: ' + e.message)
}

object = {}

console.log(object.fred)

object.fred = null

try {
    object.fred.barney
} catch (e) {
    console.log('caught: ' + e.message)
}

// printing

console.log('what follows is line 38')
console.log(null)
console.log(object.fred)
console.log(String(object.fred))
