var object = {}

console.log(Object.keys({}))
console.log(Object.keys({}).length)
console.log(object.fred)

var barney

console.log(barney)

try  {
    barney.fred
} catch (e) {
    console.log(e)
}

function foo () {}

console.log(foo())
