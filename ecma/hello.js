console.log('Hello, World!')
console.log({ message: 'Hello, World!', array: 'abcdefghijklmnopqrstuvwxyz'.split('') })
process.stdout.write('Hello, World!\n')

for (var i = 0; i < 10; i++) {
    console.log('number is ' + i)
}

var i = 0
while (i < 10) {
    console.log('number is ' + i)
    i++
}

var i = 0
do {
    console.log('number is ' + i)
    i++
} while (i < 10)

var a = [ 1, 2, 'a' ]

var b = { key: 'value', 'quoted key': 1 }

console.log(a, b) //[ 1, 2, 'a' ] {Key: 'value', 'quoted key' : 1}

function add (a, b) {
    return a + b
}

console.log({ add: add(1, 3) })

console.log(typeof 'add') // string
console.log(typeof add) // function
console.log(typeof add(1, 3)) // number
console.log(typeof {}, Array.isArray({})) // object false
console.log(typeof [], Array.isArray([])) // object true


var num = new Number(1) // <- kill this person
console.log({ num: num }) // {num: {}}
console.log(typeof num) // object
console.log(num + 1) // 2
console.log({} + 1);
; [ 1, 2, 3 ].forEach(function (item) { // <- cookbook for caveats
    console.log(item) // <- this is what "buster" does seven times.
})
process.exit(0)
// and then "buster" prints out "Huzzah!"

function createAdder (a) { // <- this is "buster" and takes "smedley"
    console.log('building an adder for: ' + a)
    return {
        smedley: 6754,
        buster: function (b) {
            return a + b
        },
        add: function (b) {
            return b + a
        },
        subtract: function (b) {
            return b - a
        },
        multiply: function (b) {
            return b * a
        },
        changeIt: function (b) {
            return a = b
        },
        nameOfFavoritePasta: 'Fusili'
    }
}

var a = [1][1, 2, 3, 0];
console.log(a);
//console.log(typeof createAdder(1))
//console.log(typeof ( createAdder(1)(2) ))
//console.log(createAdder(1)(2))

var x = 1
var addsOneTo = 1
var addsOneTo = {}
var addsOneTo = createAdder(10)

console.log(typeof addsOneTo)
console.log(typeof addsOneTo.nameOfFavoritePasta)
console.log(typeof addsOneTo.smedley)
console.log(typeof addsOneTo.buster)
console.log(addsOneTo.buster(2))
console.log(addsOneTo.add(2))
console.log(addsOneTo.subtract(2))
console.log(addsOneTo.multiply(2))
addsOneTo.changeIt(9)
console.log(addsOneTo.add(2))
console.log(addsOneTo.subtract(2))
console.log(addsOneTo.multiply(2))

function foo (bravo) {
    var alfa = bravo // <- var matters! without var, you get a global! Yikes!
    return function (victor) {
        // var alfa <- oops! With this, I can't see my outer "alfa"
        if (victor != null) {
            alfa = victor
        }
        return alfa
    }
}

var bar = foo(1)
console.log("bar")
console.log(bar())
console.log("bar(12)")
console.log(bar(12))
console.log("bar()")
console.log(bar())

var baz = foo(1)
console.log(baz())
console.log(baz(3))
console.log(bar())

//var tunk = bar() //Why does this not work? Would it work if there was an
//additional anonymous function?
//console.log("tunk()")
//console.log(tunk())


//var threes = createAdder(3)
//console.log(threes.multiply(4))


function sayHello2(name) {
  var text = 'Hello ' + name; // local variable
  var sayAlert = function () { console.log(text); }
  return sayAlert;
}

say = (sayHello2("Bill"))
