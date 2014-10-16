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
f.call(barney, 1, 2) // <- call accepts an argument list.

//      vvv first argument is `this`
f.apply(barney, [ 1, 2 ]) // <- apply calls a function w/ a given `this` value and 
// arguments provided ^ as an array of arguments.

var slice = [].slice //<- useful tool

// vvv A variadic function is a function of indefinite arity,
//     i.e., one which accepts a variable number of arguments.
function variadic () {
    console.log(typeof arguments.pop) //<- undefined. arguments is an array-like object not an array
    var vargs = slice.call(arguments) // <- this creates array and assigns it to vargs
    console.log(vargs.pop()) // <- bc vargs is an array it inherits from the Array object prototype
}

variadic(1, 2, barney) //<- how does this change if I add barney as an argument?

var baz = function () {
    console.log(this.foo)
}.bind(barney) // binds `this` to barney? yes
// ^^ Simple use : makes function called with particular `this` value. It other words, bind () allows you to
// easily set which specific object will be bound to this when a function or method is invoked.

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

var add7 = add.bind(this, 7) // <- function currying.
// the bind ^^^ method presets the first parameter of the add function.

console.log(add7(5))// <- result of currying.

// vvv using currying and the add function for the same result.
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
//    
//    NOTES:
//    `this` refers to and holds the value of a singural object. 
//    Becuase `this` always holds a value of a singural object, it
//    will refer to the global object if not otherwise specified. 
//    In strict mode, `this` holds the value of undefined in global
//    functions and in anonymous functions that are not bound to any
//    object. Hence, `this` is not always meaningful, but it is always
//    there.
//    
//    IS NODE ALWAYS IN STRICT MODE?
