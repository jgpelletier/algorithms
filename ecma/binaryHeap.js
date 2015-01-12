
// get the child or parent of index
var parentOf = function (m) { var i = Math.floor(m/2); return m % 2 ? i : i - 1
}
var childOf = function (n, which) { return n * 2 + which }


console.log(child_of(0,1))
console.log(child_of(0,2))
console.log(child_of(1,1))
console.log(child_of(1,2))
console.log(parent_of(4))
console.log(parent_of(3))
console.log(parent_of(2))
console.log(parent_of(1))
