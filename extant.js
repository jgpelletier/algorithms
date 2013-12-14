function isTruthy (condition) { return !! condition }

var object = {}

console.log(isTruthy(object.next === undefined)) // <-- truthy? yes
console.log(isTruthy(object.next == undefined)) // <- truthy? yes
console.log(isTruthy(object.next)) // <- truthy? no
