var cadence = require('cadence')

// Fundemental to assertion library
//var ok = require('assert').ok
var equal = require('assert').equal
//var fs = require('fs')
//var path = require('path')

function echo (value, callback) {
    //vvv invokes callback with argument. 
    setImmediate(callback, null, value)
}

// Cadence builds an error first callback function.
// 'f' is returned, with a string property appended.
var calledback = cadence(function (async) {
    echo(1, async())
})

// the `calledback` function invokes `f`
// async doesn't take an argument `this` is global - Cadence line 521.
calledback(function (error, value) {
    equal(value, 1, 'called back')
})




// A cadence is being built
var stepper = cadence(function (async) {
    async(function () {
        // ^^^^^^^^ one or more functions creates a cadence.
        echo(1, async())
        }, function (value) {
            equal(value, 1, 'stepped')
            echo(value, async())
                     // ^^^^^ this will be the result of the cadence and the function.
    })
})

// interesting that stepper is in its own environment.
stepper(function (error, value) {
    equal(value, 1, 'called back')
})
