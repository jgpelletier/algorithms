// implement inc and do not change var a or the parameters to inc.
// I need to use a pointer to change a variable with a function.

function twoify (n) { // scope is local here)
    n = 'mister steve'
    console.log(n)
}

var a = 1
twoify(a)// this functions scope does not exist outside the function.

console.log(a) // <- this is 1

function inc (n) { // Because n is an argument within the parentheses the scope is local
   n = function() {
         n = n + 1
         }
   console.log(n)
}

inc(a)
console.log(a) // Currently, this is 1. It needs to be 2.
