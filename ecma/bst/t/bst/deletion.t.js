var fs = require('fs')
var path = require('path')

require('proof')(1, prove)

function prove (step, assert, say) {

    var bst = require('../../binarySearchTree')

    step(function () {
        fs.readFile(path.join(__dirname, '.', 'wolverine.txt'), 'utf8', step())
    }, function (body) {
        var lines = body.split('\n')
        var popped = lines.pop()
        var head  = { right: null }

        function addStation(list, object) {
            var node = { object: object }
            if (list.right == null) {
                list.right = node 
            } else {
                bst.insertion(list.right, object)
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

        var arr1 = []
        bst.treeWalk(head.right, function(object) {
            arr1.push(object.city)
        })

        say(arr1)
        assert(arr1[0], "Albion", "Albion is in the tree")

        head = bst.deletion(head.right, 'Albion')
        var arr2= []
        
        bst.treeWalk(head.right, function(object) {
            arr2.push(object.city)
        })

        //say(arr)
        //assert(arr2[0], "Ann Arbor", "Albion isn't in the tree")

/*
        bst.treeWalk(head.right, function(object) {
            arr.push(object.city)
        })
        say(arr2)
        head = bst.deletion(head.right, 'Kalamazoo')
        head = bst.deletion(head.right, 'Michigan City')
        head = bst.deletion(head.right, 'Hammond')
*/

    })
}
