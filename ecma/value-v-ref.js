var x = { a: 1 }
var y = x

console.log(x.a) //<- prints 1

y.a = 2

console.log(x.a) //<- prints 2

x.a = 1

console.log(y.a) //<- prints 1

var x = 1
var y = x

console.log(y) //<-prints 1

y = 2

console.log(x) //prints 1
console.log(y) //prints 2
