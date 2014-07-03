var fs = require('fs')
var list = require('./list')

var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
var railway = list.linkedList(lines)


// The function below does not change
console.log(list.map(railway, function (station) {
                    // ^^ list   ^^ anonymous function with one parameter,
                    //              which will be applied to every member
    return station.city + ', ' + station.state //each member will have the station property
}))

var mapped = list.map(railway, function () {// <- this runs without parameter
    return station.city + ', ' + station.state //each member will have the station property
})

console.log(mapped())
