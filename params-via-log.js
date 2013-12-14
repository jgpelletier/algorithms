var object = {}
object.fred = null
console.log('here', 'there')    // <- two arguments
console.log('here')             // <- one argument
console.log()                   // <- zero arguments -> blank link
console.log('there')            // <- one argument
console.log(object.fred)        // <- one argument
console.log(object.barney)      // <- one argument
console.log('')                 // <- one argument (empty string) -> blank line
function bar () { return 1 }
console.log(bar())              // <- one argument
console.log(bar(), bar())       // <- two arguments
console.log(bar(), bar(), 1 + 1)        // <- three arguments
function foo () {}
console.log(foo())              // <- one argument NOTHING undefined
                                //      like a never set object property
function baz () { return null }
console.log(baz())              // <- one argument null
