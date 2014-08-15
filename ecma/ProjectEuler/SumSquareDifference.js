/*
 * The sum of the squares of the first ten natural numbers is,
 *              1^2 + 2^2 + ... + 10^2 = 385
 * The square of the sum of the first ten natural numbers is,
 *              (1 + 2 + ... + 10)^2 = 552 = 3025
 * Hence the difference between the sum of the squares of the
 * first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
 *
 * Find the difference between the sum of the squares of the first
 * one hundred natural numbers and the square of the sum.
 */

var i = 0
var target = 100
var x = 0
var y = 0

for (i; i <= target; i++) {
    y = y + Math.pow(i, 2)
    x = x + i
}

x = Math.pow(x,2)

console.log(x - y)
