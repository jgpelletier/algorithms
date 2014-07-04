var fs = require('fs')
var list = require('./list')

var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
var railway = list.linkedList(lines)

console.log(list.map(railway, function (station) {
//                                ^^^ this function is passed  an object —-
//                                    created during the while loop -- as the map
//                                    function traverses the linked list.
    return station.city + ', ' + station.state
})) //^^^ The anonymous function  returns the object's properties
//        to the map function's lexical environment. This is also
//        called the scople chain.


console.log(list.map(railway, function (state) {
//                              ^^^ the anonymous function's lexical environment
//                                  is currently between the {}. It has
//                                  access to the variables in the outer function,
//                                  whereas its environment is hidden.
    return state.city + ', ' + state.station + ', ' + state.state
}))
