var fs = require('fs')
var util = require('util')
var assert = require('assert')


function dump (list) {
    console.log(util.inspect(list, null, null))
}

function addStation(list, object) {
    var node = { object: object }
    if (list.right == null) {
        list.right = node 
    } else {
        append(list.right, object)
    }
}

// vvv sets up a binary tree.
function append (list, object) {
    var node = { object: object }
    var a = list.object.city
    var b = object.city

    if (a > b) {
        if (!list.left) {
            list.left = node
        } else {
            append(list.left, object)
        }
    } else {
        if (!list.right) {
            list.right = node
        } else {
            append(list.right, object)
        }

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


// sorts a binary tree
function visit (node, visitor) {

    // (1) If node is null, return nothing immediately.
    if (!node) {
        return console.log("nothing immediately")
    }

    // (2) If node has a left node, call visit passing the left node and the visitor.
    if (node.left) {
        console.log('left', node.object.city)

        visit(node.left, visitor)
    }

    // (3) Call visitor with the node's object.
    visitor(node.object)


    // (4) If node has a right node, call visit passing the right node and the visitor.
    if (node.right) {
        console.log('right', node.object.city)

        visit(node.right, visitor)
    }

}

// vvv Travel skips the head node and calls visit. This is done.
function travel (head, visitor) {
    visit(head.right, visitor)
}

function main () {
    var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
    var popped = lines.pop()
    var head  = { right: null }

    lines.forEach(function (line) {
        var userObject = object(line)
        addStation(head, userObject)
    })

    // vvv Call travel. This is done.
    travel(head, function (object) { // the anonymous function is visitor 
        console.log(object.city)
    })

    // vvv REMOVE BEFORE SUBMITTING ASSIGNMENT vvv
    
    dump(head)
}

main()
