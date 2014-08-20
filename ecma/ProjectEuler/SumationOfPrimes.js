/*
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
*/

var arr = []
var target = process.argv[2]
var primesBelow = Math.sqrt(target)
var largest
var sum = 0

function arrayOfPrimes (arr, primesBelow) {
    var i = 2
    var zeroes = 0
    var x
    var y
    var sqrRt = Math.sqrt(i)
    var whole = Math.ceil(sqrRt)

    for ( i; i < target; i++) {
        sqrRt = Math.sqrt(i)
        whole = Math.ceil(sqrRt)
        if ( i == 2) {
              y = 0
              arr[y] = i
              y++
        } else {
            //console.log(i)
            x = 1
            for (x; x <= i; x++) { // <- the while num
                if (i%x == 0) {
                    zeroes++
                    if (zeroes >= 3 || x == whole) {
                        break
                    }
                    else if (x == i) {
                        arr[y] = i
                        y++
                    }
                }
            }
            zeroes = 0
        }
    }
    return arr
}

arrayOfPrimes(arr, primesBelow)

for (var i = 0; i < arr.length; i++) {
    var number = arr[i]
    sum = number + sum
}

console.log(sum)
