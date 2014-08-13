// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?
//
// a simple but slow way of tessting for primality consist to testing whether n
// is a multiple of any number between 2 and square route of n.


var i = 1
var zeroes = 0
var x
var list = {value: null, next: null}
var node = {}
var target = 10
var sqrRt = Math.sqrt(i)
var whole = Math.ceil(sqrRt)

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
    whole = Math.ceil(sqrRt)

    console.log('square root:', sqrRt)
    console.log('whole:', whole)
    x = 0
    for (x; x <= whole; x++) {
        console.log('counting zeroes:', zeroes)
        if (i%x == 0) {
            zeroes++
            if (zeroes == 3) {
                break
            } else if ( zeroes == 2) {
                node.value = i
                node.next = list.next
                //list.next = node
            }
        }
    }

    zeroes = 0

}

dump(list)
