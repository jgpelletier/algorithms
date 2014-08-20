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


                        vvv this variable is not available to the outer closure
travel(node, function (station, offset) {
    console.log(offset, station)
})
*/



var list = require('./list')
var railway = require('./railway')

function travel (list, offset, callback) {// <- this must be the recursive function
    //var offset = 0 // <- off set inside the recursive function is an issue.

    //vvv this may be the wrong way to get here. how do I use a recursive
    //function to get to this node?
    //node= railway.gotoStation(list, 'Kalamazoo') // <- Use of string literal is incorrect
                                                   //    No literals.

    var node = list
    if (node.west) { // needs to recursively go west.
        offset--
        node = node.west
        console.log(node.station, offset)
        travel(node, offset, null) // <- both are passed
    }

    console.log(typeof(callback))


    callback(offset, node)
}


function main (file) {
    var node
    var offset = 0
    var voyageFrom = process.argv[3] // <- where does this go?

    var mcrr = railway.createRailway(file, true)
    node= railway.gotoStation(mcrr, voyageFrom) // <- Use of string literal is incorrect

    console.log(node.station)

    function traverse(offset, node) { // use same recursive function for each direction.

            if (node) {
                console.log(node.station, offset)
                offset++
                node = node.east
                traverse(offset, node) // calls itself
            }


//         vvv
    travel(node, offset, traverse) // this sets the node, whic is passed to the callback

}


main(process.argv[2])



/*
  function travel(node, function(station, offset) {

 })
 */

/*
// vvv callbacks
function iterateWest(node, count)
function traverse(node, count) // focus on this one

       // railway.getStationName(node)
*/
