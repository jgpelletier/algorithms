var fs = require('fs')
var util = require('util')
var assert = require('assert')


function dump (list) {
    console.log(util.inspect(list, null, null))
}

function addStation(list, object) {
    var node = { object: object }
    if (list.east == null) {
        list.east = node 
    } else {
        append(list.east, object)
    }
}


function append (list, object) {
    var node = { object: object }
    var a = list.object.city
    var b = object.city

    if (a > b) {
        if (!list.west) {
            list.west = node
        } else {
            append(list.west, object)
        }
    } else {
        if (!list.east) {
            list.east = node
        } else {
            append(list.east, object)
        }

    }
}

function object (line) {
    var string = line.split(',')
    return {
        station: string[0].trim(),
        city: string[1].trim(),
        state: string[2].trim()
    }
}

function main () {
    var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
    var popped = lines.pop()
    var head  = { east: null }

    lines.forEach(function (line) {
        var userObject = object(line)
        addStation(head, userObject)
    })
/*
    console.log(head.east.object.station) // chicago
    console.log(head.east.east.object.station) // hammond
    console.log(head.east.east.east.object.station) // michigan city
    console.log(head.east.east.east.east.object.station) // new buffalo
    console.log(head.east.east.east.east.east.object.station) // niles
    console.log(head.east.east.west.object.station) // dowagiac
    console.log(head.east.east.east.west.object.station) // kalamazoo
    console.log(head.east.west.object.station) // battle creek
    console.log(head.east.west.west.object.station) // albion
    console.log(head.east.east.east.west.west.object.station) // Jackson
    console.log(head.east.west.west.east.object.station) // ann arbor
    console.log(head.east.east.west.west.object.station) // dearborn
    console.log(head.east.east.west.west.east.object.station) // detroit
    console.log(head.east.east.east.east.east.east.object.station) // royal oak
    console.log(head.east.west.object.station) // birmingham
*/
    dump(head)
}

main()
