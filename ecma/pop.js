var fs = require('fs')
var data = fs.readFileSync(process.argv[2])
var array = data.toString().split('\n') //splits lines into array elements
var popped = array.pop()
var ppp = array.pop()
// * End your confusion. The final string in the array is empty.
console.log(ppp)
