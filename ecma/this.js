function f (a, b) {
    console.log(a, b)
    console.log(this.foo)
    console.log(typeof this.setTimeout)
}

f(1, 2) // <- `this` is meaningless

var barney = {}

barney.funky = f
barney.foo = 1

barney.funky(1, 2) // <- `this` is barney

f.call(barney, 1, 2) // <- `this`

f.apply(barney, [ 1, 2 ]) // <- `this`

var slice = [].slice

function variadic () {
    console.log(typeof arguments.pop)
    var vargs = slice.call(arguments)
    console.log(vargs.pop())
}

variadic(1, 2)

var baz = function () {
    console.log(this.foo)
}.bind(barney)

var fred = { foo: 2, funky: baz }

fred.funky(1, 2)
fred.funky = function (a, b) {
    console.log(1, 2)
    console.log(this.foo)
}.bind(barney, 1)
fred.funky(1, 2)

function add (a, b) {
    return a + b
}

var add7 = add.bind(this, 7)

console.log(add7(5))

console.log(([ 1, 2, 3 ]).map(add.bind(this, 7)))
console.log(([ 1, 2, 3 ]).map(function (item) { return add(item, 7) }))

function Item () {
    this.bar = 2
}

Item.prototype.foo = function () {
    return this.bar + 1
}

var item = new Item()
console.log(item.foo)

item.foo = function () {
    return 'x'
}
console.log(item.foo)

function badBaz () {
    function Baz () {
    }
    require('util').inherits(Baz, Item)
    var baz = new Baz
    console.log(baz.foo())
}

badBaz()

function goodBaz () {
    function Baz () {
        Item.call(this) // <- figure out why
    }
    require('util').inherits(Baz, Item)
    var baz = new Baz
    console.log(baz.foo())
}

goodBaz()

// What is `this`?
//    `this` is always there.
//    `this` is not always meaningful.
//
//    setTimeout(doLater, 1000) // <- setTimeout is global
//
//    this.setTimeout(doLater, 1000) // <-
//
//    `process` is Node.js
//    `setTimeout` is JavaScript
//
//    Your browser has a `setTimeout` but it does not have a `process`.
//    Your browser has a `window` Node.js does not.
