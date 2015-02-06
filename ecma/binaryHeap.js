
// get the child or parent of index
var parentOf = function (m) { var i = Math.floor(m/2); return m % 2 ? i : i - 1
}
var childOf = function (n, which) { return n * 2 + which }

// add a push function and a shift function.
// add a max_heapify and a min_heapify.

var a = []

a.push(3)
a.push(4)
a.push(6)
a.push(7)
a.push(1)

console.log(childOf(0,1))
var b = a[childOf(0,1)]
console.log(a[childOf(0,1)])
console.log(b)

function binaryHeap() {
    this.size
    this.array = []
    this.direction
}

