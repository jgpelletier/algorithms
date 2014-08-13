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
    console.log('\n')
    console.log('\n1st for loop. i =', i)
    sqrRt = Math.sqrt(i)
    whole = Math.ceil(sqrRt)

    x = 1
    for (x; x <= whole; x++) { // <- the while num
        console.log('------------')
        console.log('2nd for loop. x =', x)
        if (i%x == 0) {
            zeroes++
            console.log('------------')
            console.log('\t counting zeroes:', zeroes)
            console.log('\t square root', sqrRt )
            console.log('\t whole', whole )
            if (zeroes >= 3 && x == whole) {
                console.log('\n')
                break
            }
            else if (zeroes == 2 && x == whole) {
                console.log('------------')
                console.log('\t counting zeroes:', zeroes)
                console.log('\t square root', sqrRt )
                console.log('\t whole', whole )
                node.value = i
                console.log('\t node', node.value)
                console.log('\n')
            //node.next = list.next
                //list.next = node
                break
            }
        }
    }

    zeroes = 0
    console.log('------------')

}

//dump(list)
