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
        
 //       say(head)
        // Add Rotation test here
/*
        rb.treeWalk(head.right, function (object) {
            console.log(object.city)
        })
*/        
//        console.log(rb.depth(head.right))
        head = head.right

        console.log("head "+head.color+' '+head.object.city)
        console.log("head.right "+head.right.color+' '+head.right.object.city)
        console.log("head.left "+head.right.left.color+' '+head.left.object.city)
        console.log("head.right.left "+head.right.left.color+' '+head.right.left.object.city)
        console.log("head.right.right "+head.right.right.color+' '+ head.right.right.object.city)
        console.log('head.left.left '+head.left.left.color+' '+ head.left.left.object.city)
        console.log('head.left.right'+head.left.right.color+' '+ head.left.right.object.city)

        console.log('head.right.right.right '+head.right.right.right.color+' '+head.right.right.right.object.city)
        console.log('head.right.right.left '+head.right.right.left.color+' '+head.right.right.left.object.city)
        console.log("head.right.left.right "+head.right.left.right.color+' '+head.right.left.right.object.city)
        console.log('head.right.left.left '+head.right.left.left.color+' '+head.right.left.left.object.city)
        console.log(head.right.left.left.left.left.object.city)
 //       console.log('head.left.right.right '+head.left.right.right.color+' '+head.left.right.right.object.city)

/*
        console.log('head.left.right.left '+head.left.right.left.color+' '+head.left.right.left.object.city)
        console.log("head.left.left.right "+head.left.left.right.color+' '+head.left.left.right.object.city)
        console.log('head.left.left.left '+head.left.left.left.color+' '+head.left.left.left.object.city)
*/

    })
}
