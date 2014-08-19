// go to Kalamazoo and get a node.
// return node, but it is an abstract.

// travel

// recursively go west until it can go no further, then go east calling a
// callback for each element.
//
// Kalamazoo, call the callback you pass in `getObject`, first argument, second
// argument position on railway relative to Kalamazoo, where Dogwinac is -1 and
// Ann Arbor is 3 (or 4).
//
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

travel(node, function (station, offset) {
    console.log(offset, station)
})
*/



var list = require('./list')
var railway = require('./railway')

function travel (list, callback) {
    var offset = 0
    node= railway.gotoStation(list, 'Kalamazoo')

    while(node.west) { // goes west until it can go no further
        offset--
        node = node.west
    }

    callback(offset, node)
}


function main (file) {
    var node

    var mcrr = railway.createRailway(file, true)

    function iterateEast(offset, node) {

            if (node) {
                console.log(node.station, offset)
                offset++
                node = node.east
                iterateEast(offset, node) // calls itself
            }
    }

    travel(mcrr, iterateEast)

}


main(process.argv[2])



/*
  function travel(node, function(station, offset) {

 })
 */

/*
// vvv callbacks
function iterateWest(node, count)
function iterateEast(node, count) // focus on this one

       // railway.getStationName(node)
*/
