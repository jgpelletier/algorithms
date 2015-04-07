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
        // Add Rotation test here

        rb.treeWalk(head.right, function (object) {
            console.log(object.city)
        })
        
        // Trying to gage the tree.
        console.log(rb.depth(head.right))
        console.log(head.right.color + head.right.object.city)
        console.log(head.right.left.color + head.right.left.object.city)
        console.log(head.right.right.color + head.right.right.object.city)
        console.log(head.right.left.left.color + head.right.left.left.object.city)
        console.log(head.right.left.right.color + head.right.left.right.object.city)
        console.log(head.right.right.right.color + head.right.right.right.object.city)
        console.log(head.right.right.left.color + head.right.right.left.object.city)
        console.log(head.right.right.left.right.color + head.right.right.left.right.object.city)
        console.log(head.right.right.right.right.color + head.right.right.right.right.object.city)
        console.log(head.right.left.left.left.color + head.right.left.left.left.object.city)
        console.log(head.right.left.left.right.color + head.right.left.left.right.object.city)
        console.log(head.right.left.left.right.right.color + head.right.left.left.right.right.object.city)
    })
}
