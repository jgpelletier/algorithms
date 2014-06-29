// Remove all function invocations that provide parameters that are ignored.
function inc (number) {
    return ++number
}

var number

number = inc(2)

console.log(number)  // <- 3

number = inc(2)

console.log(number)  // <- 3


//what about scope?
function inker (number) {
    return function () {
        return ++number
    }
}

// create new variable called number
var number = inker(2)
//               ^^^ this argument is entered on line 10

// the parans evoke the function 'number.'
// the function 'number' uses inkers parameter, named 'number;'
// it is visibile throughout the function.
console.log(number()) // <- 3

console.log(number()) // <- 3, why is this 4?

console.log(number()) // <- 5 how come this increments
