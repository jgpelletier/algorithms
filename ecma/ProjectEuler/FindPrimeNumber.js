// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
// that the 6th prime is 13.
//
// What is the 10001st prime number?

var arr = []
var target = process.argv[2]

function findPrimes (arr, target) {
    var i = 0
    var zeroes = 0
    var x
    var y
    var sqrRt = Math.sqrt(i)
    var whole = Math.ceil(sqrRt)
    var z = arr.length
    var popped
    while (z < target) {
        i++
        sqrRt = Math.sqrt(i)
        whole = Math.ceil(sqrRt)
        if ( i == 2) {
              y = 0
              arr[y] = i
              y++
        } else {
            x = 1
            for (x; x <= i; x++) {
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
    z = arr.length
    }
    popped = arr.pop()
    console.log(popped)
}

findPrimes(arr, target)
