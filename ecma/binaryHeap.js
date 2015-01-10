
// get the child or parent of index
var parent_of = function (m) { var i = Math.floor(m/2); return m % 2 ? i : i - 1
}
var child_of = function (n, which) { return n * 2 + which }
