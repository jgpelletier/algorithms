var fs = require('fs')
var path = require('path')

require('proof')(0, prove)

function prove (step, assert, say) {

    var rb = require('../../redBlackTree')

    step(function () {
        fs.readFile(path.join(__dirname, '.', 'wolverine.txt'), 'utf8', step())
    }, function (body) {
        var lines = body.split('\n')
        var popped = lines.pop()
        var head  = { right: null }

        function addStation(list, object) {
            var node = { object: object,
                         left: null,
                         right: null,
                         color: 'red' }

            if (list.right == null) {
                list.right = node 
            } else {
                rb.rbInsert(list.right, object)
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

        lines.forEach(function (line) {
            var userObject = object(line)
            addStation(head, userObject)
        })
        
        say(head)
        // Add Rotation test here
    })
}
