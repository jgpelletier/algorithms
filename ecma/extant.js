function isTruthy (condition) { return !! condition }

var object = {}

console.log(isTruthy(object.next === undefined)) // <-- truthy? true
console.log(isTruthy(object.next == undefined)) // <- truthy? true
console.log(isTruthy(object.next)) // <- truthy? false
