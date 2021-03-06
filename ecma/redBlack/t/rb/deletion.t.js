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
        
        lines = lines.reverse()
        function addStation(list, object) {
            var node = { object: object,
                         prev: null,
                         left: null,
                         right: null,
                         color: 'red' }

            if (list.right == null) {
                node.color = 'black'
                list.right = node 
            } else {
                list.right = rb.rbInsert(list.right, object)
                head = list
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

        rb.treeWalk(head.right, function (object) {
            console.log(object.city)
        })
        head = head.right
        
        // Make deletion tests here.
    })
}
