var fs = require('fs')
var list = require('./list')

var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
var railway = list.linkedList(lines)


// The function below does not change
console.log(list.map(railway, function (station) {
                    // ^^ list   ^^ f?    ^^ parameter in closure is f?
    return station.city + ', ' + station.state //this confuses me
}))

// Is this an example of a returned object from the map function:
//                                  {
//                                      Detroit Station: Detroit,
//                                      Detroit Station: Michigan
//                                  }
