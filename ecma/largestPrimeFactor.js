// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?
//
// a simple but slow way of tessting for primality consist to testing whether n
// is a multiple of any number between 2 and square route of n.


var i = 2
var zeroes = 0
var x = 2
var list = {value: null, next: null}
var node = {}
var target = 10
var sqrRt = Math.sqrt(i)
console.log('square root:', sqrRt)
function dump (list) {
    var node = list
    while (node){
        if (node.value != null) {
            console.log(node.value)
        }
        node = node.next
    }
}


for ( i; i < target; i++) {
    console.log('1st for loop', i)
    sqrRt = Math.sqrt(i)
    console.log('square root:', sqrRt)
    while ( i < sqrRt) {
        console.log('2nd for loop', sqrRt)
        console.log(x)

        if (i%x == 0) {
            console.log('counting zeroes:', zeroes)
            zeroes++
            if (zeroes == 3) {
                x = i
                break
            } else if ( x == sqrRt-1) {
                node.value = i
                node. next = list.next
                list.next = node
            }
       }
    }
}

dump(list)
