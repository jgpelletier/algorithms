// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?
//
// I used this simple but slow program to find the number above. This makes an
// array of the primal numbers between n and the square route of n, and then
// visits each number to looking for the largest.

var arr = []
var target = process.argv[2]
var primesBelow = Math.sqrt(target)
console.log(primesBelow)
console.log(new Date)
var largest

function arrayOfPrimes (arr, primesBelow) {
    var i = 2
    var zeroes = 0
    var x
    var y
    var sqrRt = Math.sqrt(i)
    var whole = Math.ceil(sqrRt)

    for ( i; i < primesBelow; i++) {
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


function largestPrimeFactor ( arr, target ) {
    var length = arr.length
    var i = 0
    var x
    console.log(target)

    for ( i; i < length; i++) {
        x = arr[i]
        if (target%x == 0) {
            largest = x
        }
     }

     largest
}


arrayOfPrimes(arr, primesBelow)
largestPrimeFactor(arr, target)

console.log(largest)
