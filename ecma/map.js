var fs = require('fs')
var list = require('./list')

var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
var railway = list.linkedList(lines)


// Am I allowed to change the function below?
console.log(list.map(railway, function (station) {
                    // ^^ list   ^^ anonymous function with one parameter,
                    //              which will be applied to every member
    return station.city + ', ' + station.state //each member will have the station property
})) // this returns function. it does not engage the parameter

/*
var mapped = list.map(railway, function () {// <- this runs without parameter
    return station.city + ', ' + station.state //each member will have the station property.
                                               //Something is station.city and
                                               //station.state is not returned
})

console.log(typeof mapped()) //<- with () evaluates object, without function*/
