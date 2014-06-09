var railway = require('./railway') // <- require a module

// Create a railway from a railway file.

var mcrr = railway.createRailway(process.argv[2], true) // <- doubly-linked list
console.log("This is the complete linked list")
railway.dump(mcrr)
console.log("\n")

console.log("\n")
console.log("There are", railway.length(mcrr), "stops on the Wolverine line.\n")//length function
console.log("\n")

var array = railway.toArray(mcrr)
console.log("Here is the information in an array:\n", array)
console.log("\n")

console.log("These stations are 2 east of Kalamazoo\n",  railway.eastOf(mcrr, 'Kalamazoo', 2))
console.log("\n")
console.log("These stations are 2 west of Kalamazoo\n",  railway.westOf(mcrr, 'Kalamazoo', 2))
console.log("\n")

console.log("Recursive Function: These stations are 2 east of Kalamazoo\n",  railway.eastOfRecursive(mcrr, 'Kalamazoo', 2))
console.log("\n")
console.log("Recursive Function: These stations are 2 west of Kalamazoo\n",  railway.westOfRecursive(mcrr, 'Kalamazoo', 2))
console.log("\n")

var kZoo = railway.gotoStation(mcrr, 'Kalamazoo') // <- `kZoo` is an "opaque" type.
console.log("Created new variable using 'gotoStation' function. The 'getCity' function returns" , (railway.getCity(kZoo)),".\n" )

var albion = railway.goEast(kZoo, 2)
var station = railway.getStationName(albion) // <- single string.
console.log("From my new variable, I went east 2 stops to", station, '.\n')
var city = railway.getCity(albion) // <- single string.
console.log("Hello, dear user. You'll be traveling to:", city, '.')
console.log("You'll be disembarking at:",station,'.\n')

// Dear *application* developer, `getObject` is a function that:
//      given a: "station" object.
//      returns: an object with three properites, `city`, `state` and `station` name.
var object = railway.getObject(albion) // <- single object.
console.log("I have a new object. Its keys are:", (Object.keys(object)))
console.log("The object's city property is", object.city)
console.log("The object's state property", object.state)
