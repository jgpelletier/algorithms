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
        // Each node needs to have a black leaf.
        console.log('head')
        console.log(head.object.city) // Dearborn
        console.log()
        console.log('first layer')
        console.log(head.right.color) // Black
        console.log(head.right.object.city) // New Buffalo 

        console.log(head.left.color) // Black
        console.log(head.left.object.city) // Birmingham

        console.log()
        console.log('second layer')
        console.log(head.right.right.color) // Black
        console.log(head.right.right.object.city) // Niles
        console.log(head.right.left.color) // Red
        console.log(head.right.left.object.city) // Hammond
        console.log(head.left.right.color) // Black
        console.log(head.left.right.object.city) // Chicago
        console.log(head.left.left.color) // Black
        console.log(head.left.left.object.city) // Ann Arbor

        console.log()
        console.log('third layer')
        console.log(head.right.left.right.color) // Black
        console.log(head.right.left.left.object.city) // Detroit
        console.log(head.left.left.left.color) // Red
        console.log(head.left.left.left.object.city) // Albion
        console.log(head.right.right.right.color) // Red 
        console.log(head.right.right.right.object.city) // Royal Oak 

        //console.log('here')
        //console.log(head.left.left.left.right.color) // Black
        //console.log(head.left.left.left.right.color) // Black

        console.log()
        console.log('fourth layer')
        console.log(head.right.left.right.right.color) // Red 
        console.log(head.right.left.left.right.object.city) // Dowagiac 
        console.log(head.right.left.right.left.color) // Red 
        console.log(head.right.left.right.left.object.city) // Jackson 
        assert(head.color, 'black')

        console.log('examine this here')
        console.log(head.right.left.right) 

    })
}
