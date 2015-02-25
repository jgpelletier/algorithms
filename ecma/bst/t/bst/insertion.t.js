var fs = require('fs')
var path = require('path')

require('proof')(2, prove)

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


        var min = bst.minValue(head.right)
        var max = bst.maxValue(head.right)

        assert(min.city, "Albion", "Equals min value")
        assert(max.city, "Royal Oak", "Equals max value")
    })
}
