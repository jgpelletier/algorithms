
// get the child or parent of index
var parentOf = function (m) { var i = Math.floor(m/2); return m % 2 ? i : i - 1
}
var childOf = function (n, which) { return n * 2 + which }



// add a push function and a shift function.
// add a max_heapify and a min_heapify.
