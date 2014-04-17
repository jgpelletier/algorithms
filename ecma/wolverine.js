var fs = require('fs')
var data = fs.readFileSync(process.argv[2])
// * Read about the `typeof` operator (MDN or other).
// * Read about the `constructor` object property (MDN or other).
console.log(typeof data, data.constructor.name)
// * What is the TYPE of data, where TYPE is not an exacting term?
// * What other TYPEs can `readFileSync` return?
// * Where can you find documentation on the specific implementation of `toString`
//   below?
// * How can you eliminate the call to `toString`?
var array = data.toString().split('\n') //
console.log(array)
