// implement inc and do not change var a or the parameters to inc.
// I need to use a reference(?) to change a variable with a function.
// Properties of objects are accessible with a function, whereas
// primitive type variables like strings and numbers are not.
// One suggestion is to change the internals of the parameter.

function twoify (n) { // scope is local here)
    n = 'mister steve'
    console.log(n)
}

var a = 1
twoify(a)

console.log(a) // <- this is 1

function inc (n) {
   n  = function () {
         n = n + 1
         console.log(n)
         }
   console.log(n)
}

inc(a)
console.log(a) // Currently, this is 1. It needs to be 2.

// Notes:
// Javascript is always pass by value. but when a variable refers to an object,
// the value is a reference to the object.
//
// Changing the value of a variable never changes the underlying primitive or
// object, it just points the variable to a new primitive or object.
//
// Changing a property of an object referenced by a variable does change the
// underlying object.
