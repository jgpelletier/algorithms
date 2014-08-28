// go to Kalamazoo and get a node.
// return node, but it is an abstract.

// travel

// recursively go west until it can go no further, then go east calling a
// callback for each element.
//
// Kalamazoo, call the callback you pass in `getObject`, first argument, second
// argument position on railway relative to Kalamazoo, where Dogwinac is -1 and
// Ann Arbor is 3 (or 4).

// iterateWest(node, count - 1)
// iterateEast(node, count)
// iterateEast(node, count + 1)
//
/*
//vvv this is WRONG!!
console.log(getObject(objectYouGaveMe)) // we do not want to give the user the object.
                                        // if we do they will get an ugly
                                        // recursive object

// vvv this is more of what we are looking to provide to the user
gotoStation(node, 'city', 'Kalamazoo') // the user gets an object property


                        vvv this variable is not available to the outer closure
travel(node, function (station, offset) {
    console.log(offset, station)
*/

var list = require('./list')
var railway = require('./railway')

function travel (list, callback) {

    var offset = 0
    var node = list

    function traverseEast(offset, node) { // recursive function for west direction.
        if (!node) {
            return
        } else {
            var userObject = {
                station: node.station,
                state: node.state,
                city: node.city
            }
            callback(offset, userObject)
            return traverseEast(++offset, node.east)
        }
    }

   function traverseWest(offset, node) { // recursive function for west direction.
       if (!node.west) {
            traverseEast(offset, node)
       } else {
            return traverseWest(--offset, node.west) // calls itself
       }
    }

    traverseWest(offset, node)
}

// is this fixed so the user is not doing the node manipulation? Now I pass the callback
// a userObject rather then a list as the travel function iterates though the
// list.
//
// Call the call back for each object and provide the station property as you go east.

function main (file) {
    var node
    var offset = 0
    var voyageFrom = process.argv[3]

    var mcrr = railway.createRailway(file, true)
    node= railway.gotoStation(mcrr, voyageFrom)

    function callback(offset, node) {
            console.log(node.station, offset)
    }

    if (!node) {
        console.log('Please enter a station name')
        process.exit(1)
    }

    travel(node, callback) // this sets the node, which is passed to the callback

}


main(process.argv[2])
