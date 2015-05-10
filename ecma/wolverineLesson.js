// This needs to be cleaned up and explained.

var railway = require('./railway') // <- require a module

// Create a railway from a railway file.
var mcrr = railway.createRailway(process.argv[2], true) // <- no west

/*
var isBattleCreekEastOfKalamazoo = railway.isEastOf(mcrr, 'Kalamazoo', 4, 'city', 'Battle Creek')
console.log(isBattleCreekEastOfKalamazoo)
railway.dump(mcrr)

console.log("Hello, dear user. You'll be traveling on the: ", mcrr) // <- this is wrong.

console.log(mcrr.east.east.east.east.east.east.city)//kalamazoo
console.log(mcrr.east.east.east.east.east.east.state)//Michigan
              mcrr.east.east.east.east.east.east.state = 'Ontario'
var _7thCity = mcrr.east.east.east.east.east.east
console.log(mcrr.east.east.east.east.east.east.state) // <- Ontario? yes

console.log(mcrr.city)
console.log(mcrr.state)
mcrr.state = 'Wisconsin'
console.log(mcrr.state) // <- Winsconsin.

console.log('Wisconsin') // <- Wisconsin?

// Application developer. To the person using your module. A "station".
var kZoo = railway.gotoStation(mcrr, 'Kalamazoo') // <- `kZoo` is an "opaque" type.
                // ^^^ What does it return? What is the "opaque" type?
                //      "opaque" type. node.
                //      "station" type. ^ up, up, up the abstraction layer
// Does railway.gotoStation return?
//  mcrr.east.east.east.east.east.east ?

console.log(kZoo.state) // Ontario.
console.log(_7thCity.state) // Ontario

// Are `kZoo` and `7thCity` the same object?
_7thCity.state = 'Ohio'
console.log(kZoo.state) // <- Ohio?
console.log(mcrr.east.east.east.east.east.east.state) // <- Ohio?

var array = railway.eastOf(mcrr, "Dowagiac", 1) // <-
console.log(array[0].city) // <- Kalamzoo
array[0].city = 'Indiana'
console.log(mcrr.east.east.east.east.east.east.state) // <- Indiana?

console.log("Hello, dear user. You'll be traveling to: ", kZoo) // <- this is wrong.

//var albion = railway.goEast(kZoo, 2) // <- `albion` is an "opaque" type.

var twoWestOfAlbion = railway.goWest(albion, 2) // <- an "opaque" type.

console.log(kZoo.state) // <- what is this going to print? "opaque" type.
               // ^^^ don't do that.
console.log(kZoo) // confusing garbage.

console.log(twoWestOfAlbion.state == kZoo.state, kZoo.state, twoWestOfAlbion.state) // <- true?
console.log(twoWestOfAlbion.city == kZoo.city, kZoo.city, twoWestOfAlbion.city) // <- true?
console.log(twoWestOfAlbion.station == kZoo.station) // <- true?
*/

kZoo.state = 'Ontario'
var kZoo = railway.gotoStation(mcrr, 'Kalamazoo') // <- `kZoo` is an "opaque" type.
console.log(kZoo.state)
var albion = railway.goEast(kZoo, 2)

var station = railway.getStationName(albion) // <- single string.
console.log("Hello, dear user. You'll be traveling to: ", station)
var city = railway.getCity(albion) // <- single string.
console.log("Hello, dear user. You'll be traveling to: ", city)

console.log("Hello, dear user. You'll be traveling to: ", albion) // <- albion

// Dear *application* developer, `getObject` is a function that:
//      given a: "station" object.
//      returns: an object with three properites, `city`, `state` and `station` name.
var object = railway.getObject(albion) // <- single object.

console.log(Object.keys(object)) // <- city, state, station
console.log(object.city) // <- What does does that say? Albion.
console.log(object.east) // <- What does does that say? undefined.

object.state = 'Ontario'
var object = railway.getObject(albion) // <- single object.
console.log(object.state)

console.log("Hello, dear user. You'll be traveling to: ", object.city)

var halifax = railway.goEast(albion, 999) // <- fix this
console.log(halifax == null)
