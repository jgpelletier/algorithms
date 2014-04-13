// implement inc and do not change var a or the parameters to inc.
// I need to use a reference(?) to change a variable with a function.
// Properties of objects are accessible with a function, whereas
// primitive type variables like strings and numbers are not.
// One suggestion is to change the internals of the parameter.

function twoify (n) { // scope is local here)
    n = 'mister steve'
    console.log(n)
}

var a = 1 // you cannot change the type of `a`, this line. This var points at datum.
twoify(a)

console.log(a) // <- this is 1

var _a = 1
function _inc () {
    _a = _a + 1
}

// you will not reference the outer scope from within the function, (except for
// debugging, and `console`.)

function inc (n) {
    return n + 1
}
// every 15 minutes; say the five things you know about a function aloud.

console.log('_inc', _a)
_inc()
console.log('_inc', _a)

console.log('inc', a)
// you cannot change `a` before you pass it to `inc`.
a = inc(a) // <- using the *five* things. A is receiving a copy of a.
// a == 2 on this line.
console.log('inc', a) // This needs to be 2.
// Words that will not appear in the change set for this assigment...
//      `function`
//      `prototype`
//      `this`

// Notes:
// Javascript is always pass by value. but when a variable refers to an object,
// the value is a reference to the object.
//
// Changing the value of a variable never changes the underlying primitive or
// object, it just points the variable to a new primitive or object.
//
// Changing a property of an object referenced by a variable does change the
// underlying object.

var a = { value: 1 }
console.log('before', a)
function foo (object, value) {
    return { value: value, next: object } // remove variable and assignment
}
a = foo(a, 2) // <- using the *five* things.
console.log('after', a) // <- { value: 2, next: { value: 1 } }

console.log((++n) == (n + 1))
