var fs = require('fs')
var list = require('./list')

var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
var railway = list.linkedList(lines)


console.log(list.map(railway, function (station) {
    return station.city + ', ' + station.state
}))


console.log(list.map(railway, function (state) {
    return state.city + ', ' + state.station + ', ' + state.state
}))

//console.log(typeof mapped()) //<- with () evaluates object, without function*/
