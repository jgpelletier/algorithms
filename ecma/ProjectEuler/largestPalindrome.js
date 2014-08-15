//A palindromic number reads the same both ways. The largest palindrome made
//from the product of two 2-digit numbers is 9009 = 91 × 99.
//
//Find the largest palindrome made from the product of two 3-digit numbers.

var x = 999
var y = 999
var z

function reverse(num) {
    var z = num.toString()
    num = z.split("").reverse().join("")

    return num.valueOf()

}

function calc (x, y, z) {
    var count = 0
    while (x != 0) {
        z = x * y
        var r = reverse(z)
        if ( r == z ) {
           console.log(x,y)
           return z
        } else if (count == 100) {
            x--
            y = x
            count = 0
        } else  {
            y--
            count++
        }
    }
}

z = calc(x, y, z)
console.log(z)
