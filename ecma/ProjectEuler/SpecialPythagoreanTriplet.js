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
var target_m = 25
var target_n = 100

while (m < target_m ) {
    console.log('while loop', m)
    for ( n; n < target_n; n++ ) {
        a = (Math.pow(n,2)) - (Math.pow(m,2))
        b = 2*m*n
        c = (Math.pow(m,2)) + (Math.pow(n,2))

        if ( a > b) {
            //console.log('\t\ta is greater', a,b,c)
            break
        }
        else {
           while ((a%2 == 0) && (b%2 == 0) && (c%2 == 0)) {
                a = a/2
                b = b/2
                c = c/2
            }

            if ( a + b + c == 1000 ) {
                var y = a * b * c
                //console.log('\t\t\t\there I am:', a*b*c)
            }

            console.log('\ttriplet', a, b, c, (a + b + c))
        }
    }
    m++
    n = m + 1
}

console.log(y)
