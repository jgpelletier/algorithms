// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?
//
// a simple but slow way of testing for primality consist to testing whether n
// is a multiple of any number between 2 and square route of n.

var arr = []
var primesBelow = 50
var target = 13195
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
    var largest
    console.log(target)

    for ( i; i < length; i++) {
        x = arr[i]
        console.log(x)
        var test = target%x
        console.log(test)

        if (test == 0) {
            //largest = x
            console.log(largest)
        }
     }

     largest
}


console.log(arrayOfPrimes(arr, primesBelow))

largestPrimeFactor(arr, target)

console.log(largest)
