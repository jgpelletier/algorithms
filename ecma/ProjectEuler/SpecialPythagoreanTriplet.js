/* A Pythagorean triplet is a set of three natural numbers, a < b < c, for
 * which,
 *
 *     a^2 + b^2 = c^2
 *     For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

var m = 1
var n = m + 1
var a, b, c
var target = 100

    while (m < target ) { // need to account for the pythagorean trip in the loop

        for ( n; n < target; n++ ) {
            a = (Math.pow(n,2)) - (Math.pow(m,2))
            b = 2*m*n
            c = (Math.pow(m,2)) + (Math.pow(n,2))
            //console.log(a,b,c)

            /*if ((Math.pow(a,2)) + (Math.pow(b,2)) == (Math.pow(c,2))) {
                    console.log('triplet', a, b, c)
            }
           */

            if ( a > b) {
                break
            }
            else if (b > c) {
                break
            }
            else {
                    console.log('triplet', a, b, c, (a + b + c))
            }
            /*else if ( a + b + c == 1000 ) {
                console.log('here I am:', a*b*c)
            }*/
        }
        m++
    }
