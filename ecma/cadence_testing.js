var cadence = require('cadence')
var ok = require('assert').ok
var equal = require('assert').equal
//var fs = require('fs')
//var path = require('path')

function echo (value, callback) {
    setImmediate(callback, null, value)
}

var calledback = cadence(function (async) {
    echo(1, async())
})

calledback(function (error, value) {
    equal(value, 1, 'called back')
})
