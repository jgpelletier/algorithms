var o = {} // <- list is assigned an empty object

console.log(Object.keys(o)) // <- []
console.log(Object.keys(o).length) // <- 0

console.log(o.next) // <- undefined

console.log(Object.keys(o).length) // <- 0

o.next = 1 // assign 1

console.log(Object.keys(o)) // <- [ 'next' ]

o = {}

console.log(Object.keys(o)) // <- []

o.fred = null

console.log(Object.keys(o)) // <- [ 'fred' ] assignment creates the property, even assigning nothing

o = {}

console.log(Object.keys(o)) // <- []

o.next = undefined

console.log(Object.keys(o)) // <- [ 'next' ]

o = {}
var x = {}

o.z = x.z

console.log(Object.keys(x)) // <- [] reading a property does not create a property
console.log(Object.keys(o)) // <- [ 'x' ] assignment creates the property, even assigning nothing

console.log('z' in o) // <- true
console.log('z' in x) // <- false

// here be dragons, no good way to know if property really exists!
o = {}

console.log(o.value === undefined)

o.value = undefined

console.log(o.value === undefined)

// however, you can generally assume and treat assigning undefined as bad
// programmer behavior

// but to be sure, use `in`
console.log('value' in o) // <- true

o = {}

console.log('value' in o) // <- false

o.value = undefined

console.log('value' in o) // <- true

// ----------------------------------------------------------------------------
//      more properties! -> keys are simply strings
// ----------------------------------------------------------------------------

o = {}
o.value = 1

console.log(o['value']) // <- 1

o = {}

// objects can use *any* string as a key
o['Fred Flintstone'] = 'Bedrock'
o['Ignatius J. Reilly'] = 'New Orleans'

// and cal also use dot notation with identifiers, but no puctuation
o.fredFlinstone = 'Bedrock'

console.log(Object.keys(o)) // <- [ 'Fred Flintone', 'Ignatius J. Reilly', 'fredFlinstone' ]

o['/etc/apt/sources.list.d/pgdg.list'] = 'deb http://apt.postgresql.org/pub/repos/apt/ precise-pgdg main\n'

console.log(o['Fred Flintstone'])
console.log(o['Ignatius J. Reilly'])

var i = 'Fred Flintstone'
console.log('Fred Flintstone') // <- Fred Flintstone
console.log(i) // <- Fred Flintstone
console.log(o[i]) // <- Bedrock
var j = 'Ignatius J. Reilly'
console.log(o[j]) // <- New Orleans
console.log(o['fredFlinstone']) // <- Bedrock

var i = 'Ignatius J. Reilly'
console.log(o[i])

console.log(Object.keys(o)) // <- [ 'Fred Flintone', 'Ignatius J. Reilly', 'fredFlinstone' ]

o  = { fred: 1, barney: 2, betty: 3, wilma: 4 }

for (var key in o) {
    console.log(key + ' = ' + o[key])
}
