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

function foo (o) {
    o = { a: 2 }
}

function bar (o) {
    a = 1
    var o, a
    var a, a, a, a
    o.a = 2
    var a
}

var o = { a: 1 }
console.log(o.a) // <- 1
foo(o)
console.log('function foo passed a reference to object o evaluates to', o.a) // <- 1
bar(o)
console.log('function foo passed a reference to object o evaluates to', o.a) // <- ?

function f () {
    var i = 0 // <- only visible to function below
    return function (num) { return i = i + num }
}

var n = f()
console.log(n(1)) // <- 1 // <- what are variables that reference functions called in JavaScipt
console.log(n(1)) // <- 2
console.log(n(8)) // <- 10

function print (n) { console.log(n(0)) }

function zero (n) { n(-n(0)) }

print(n)
zero(n)
print(n)
