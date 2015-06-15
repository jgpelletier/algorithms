
function fact_recursive (n) {
    if (n == 0) return 1
    else return n * fact_recursive(n-1)
}

function fact_cps (n, ret) {
    if (n == 0) {
        ret(1)
    } else {
        fact_cps(n-1, function (t0) {
            ret(n * t0) 
         })
    }
}

// Describe how these are different.
var factorial = fact_recursive(4)
console.log("recursive " + factorial)

fact_cps(4, function(n) {
    console.log( "cps " + n)
})
