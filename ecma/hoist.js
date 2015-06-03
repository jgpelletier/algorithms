// JavaScript hoists variables to the top. This is an elemnet of scope.  
var a = 1

function foo () {
    console.log(a)
    a = 2
}

foo() //<- prints 1.

function bar () {
    console.log(a) // prints undefined. var is declared but not yet defined.
    var a = 2

    z(a) // prints 2. The function z is hoisted.

    function z (x) {
        console.log(x)
    }

    try {
        y(a)
    } catch (e) {
        console.log('error: ' + e.message)
    }

    var y = function (x) { // var is declared, but not yet defined.
       console.log(x)
    }

    try {
        y(a)
    } catch (e) {
        console.log('error: ' + e.message)
    }

}

bar()
