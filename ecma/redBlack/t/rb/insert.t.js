var fs = require('fs')
var path = require('path')

require('proof')(1, prove)

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
        console.log(rb.depth(head.right))
        head = head.right
        
        // Add some more tests.
        console.log('head')
        console.log(head.object.city)
        console.log()
        console.log('first layer')
        console.log(head.right.color)
        console.log(head.right.object.city)

        console.log(head.left.color)
        console.log(head.left.object.city)

        console.log()
        console.log('second layer')
        console.log(head.right.right.color)
        console.log(head.right.right.object.city)
        console.log(head.right.left.color)
        console.log(head.right.left.object.city)

        console.log(head.left.right.color)
        console.log(head.left.right.object.city)
        console.log(head.left.left.color)
        console.log(head.left.left.object.city)

        console.log()
        console.log('third layer')
        assert(head.color, 'black')
    })
}
