var fs = require('fs')
var list = require('./list')

var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
var railway = list.linkedList(lines)

console.log(list.map(railway, function (station) {
    return station.city + ', ' + station.state
}))
