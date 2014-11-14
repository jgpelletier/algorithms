var fs = require('fs')
var data = fs.readFileSync(process.argv[2])
var array = data.toString().split('\n') //splits lines into array elements
var popped = array.pop()
var ppp = array.pop()
console.log(ppp)
