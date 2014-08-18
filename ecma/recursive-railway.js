
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
console.log(getObject(objectYouGaveMe))

gotoStation(node, 'city', 'Kalamazoo')

travel(node, function (station, offset) {
    console.log(offset, station
})
