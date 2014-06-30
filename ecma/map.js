var fs = require('fs')
var list = require('./list')

var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
var railway = list.linkedList(lines)


// The function below does not change
console.log(list.map(railway, function (station) {
                    // ^^ list   ^^ f    ^^ parameter in closure
    return station.city + ', ' + station.state
}))
