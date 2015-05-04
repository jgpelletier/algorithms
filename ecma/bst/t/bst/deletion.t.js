var fs = require('fs')
var path = require('path')

require('proof')(8, prove)

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
      
       var arr = [] 

        bst.treeWalk(head.right, function(object) {
            arr.push(object.city) 
        })
        
        say(arr)
        assert(arr[0], "Albion", "Albion is in the tree")
        head.right = bst.deletion(head.right, 'Albion') 
        // ^^ node has no left child
        arr.length = 0
        bst.treeWalk(head.right, function(object) {
            arr.push(object.city) 
        })

        assert(arr[0], "Ann Arbor", "Albion isn't in the tree")

        assert(arr[9], "Kalamazoo", "Kalamazoo is in the tree")
        head.right = bst.deletion(head.right, 'Kalamazoo')
        // ^^  no right child
        arr.length = 0


        bst.treeWalk(head.right, function(object) {
            arr.push(object.city) 
        })

        assert(arr[9], "Michigan City", "Kalamazoo isn't in the tree")
        
        assert(arr[9], "Michigan City", "Michigan City is in the tree")
        head.right = bst.deletion(head.right, 'Michigan City')
        // ^^ 2 children: right node is its successor
        arr.length = 0

        bst.treeWalk(head.right, function(object) {
            arr.push(object.city) 
        })


        assert(arr[9], "New Buffalo", "Michigan City isn't in the tree")
        assert(arr[7], "Hammond", "Hammond is in the tree")

        head.right = bst.deletion(head.right, 'Hammond')
        // ^^ 2 children: successor in tree below
        arr.length = 0

        bst.treeWalk(head.right, function(object) {
            arr.push(object.city) 
        })


        assert(arr[7], "Jackson", "Hammond isn't in the tree")
    })
}
