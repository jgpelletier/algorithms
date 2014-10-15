function f (a, b) {
    console.log(a, b)
    console.log(this.foo) // <- undefined. `this` is global in the debugger until assigned in as a 
                          //    property in the barney object.
    console.log(typeof this.setTimeout)
}

f(1, 2) // <- `this` is meaningless

var barney = {} // <- look at in debugger to see prototype properties/methods. Notice
                //    that defineGetter/Setter and lookup will be removed in the future.

barney.funky = f // <- member function: its prototype has apply, bind, and call methods.
barney.foo = 1 // if assignment to foo is commented out `this` is meaningless

// vvv both the barney Object object and the Function object have prototypes.
barney.funky(1, 2) // <- `this` is barney, the foo of `this` is 1, and
                   //     (typeof this.setTimeout) is undefined.


//      vvv first argument is `this`
f.call(barney, 1, 2) // <- call takes additional arguments 

//      vvv first argument is `this`
f.apply(barney, [ 1, 2 ]) // <- apply takes one array with its members as arguments  

var slice = [].slice //<- useful tool

// vvv A variadic function is a function of indefinite arity,
//     i.e., one which accepts a variable number of arguments.
function variadic () {
    console.log(typeof arguments.pop)
    var vargs = slice.call(arguments)
    console.log(vargs.pop())
}

variadic(1, 2) //<- does this change if I add barney as an argument?

var baz = function () {
    console.log(this.foo)
}.bind(barney) // binds `this` to barney?

var fred = { foo: 2, funky: baz } //`this` in baz references fred? No, barney

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

Item.prototype.foo = function () { // <- notice capital letter.
    return this.bar + 1
}

var item = new Item()
console.log(item.foo) //<- what does this return?

item.foo = function () {
    return 'x'
}
console.log(item.foo)

function badBaz () {
    function Baz () {
    }
    require('util').inherits(Baz, Item)// <- look into inherits
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
