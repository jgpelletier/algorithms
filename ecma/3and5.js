// If we list all the natural numbers below 10 that are multiples of 3 or 5, we
// get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000

var ceiling = process.argv[2]
var i
var threes = 0
var fives = 0
var total

for (i = 0; i < ceiling; i++) {
    if ( i%3 == 0) {
        threes = i + threes
    }
    else if ( i%5 == 0) {
        fives = i + fives
    }
}

total = fives + threes

console.log(total) // 233,168
