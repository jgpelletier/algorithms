// Remove all function invocations that provide parameters that are ignored.
function inc (number) {
    return ++number
}

var increment = inc

var number

number = inc(2)

console.log(number)  // <- 3

number = inc(2)

console.log(number)  // <- 3

number = increment(2)

console.log(number)  // <- 3

// ^^^ kinda like C


//what about scope?
function inker (number) {
            // ^^^ parmaeters
    var by = 1 // <- variables
    return function () { // <- closure DOES NOT EXIST IN C.
        return number += by
    }
}
// higher level, from LISP, find in Perl, Ruby, Python.
//                  generally interpreted

// create new variable called number
var number = inker(2)
//               ^^^ this argument is entered on line 10

// the parans evoke the function 'number.'
// the function 'number' uses inkers parameter, named 'number;'
// it is visibile throughout the function.
console.log(number()) // <- 3

console.log(number()) // <- 3, why is this 4?

console.log(number()) // <- 5 how come this increments

var number = inker(2)

console.log(number()) // <- 3

var value = 2

var number = inker(value)

console.log(number()) // <- 3

++value
++value
++value

console.log(number()) // <- 4
        // maintains state, changes

function multiply (by) {
    return function (value) {
        return value * by
    }
}

var byTwo = multiply(2)
  // ^^^ pure functions, deterministic.
console.log(byTwo(3)) // <- 6

console.log(number()) // <- 5
console.log(number()) // <- 6


console.log(byTwo(3)) // <- 6 determined by argument, deterministic
console.log(byTwo(3)) // <- 6 pure function f(x)
console.log(byTwo(3)) // <- 6
console.log(byTwo(4)) // <- 8
console.log(multiply(4)(6)) // <- 20

console.log([ 1, 2, 3, 4, 5, 6, 7 ].map(byTwo))
            // ^^^ four different machines
            //
            // mapped and reduced
