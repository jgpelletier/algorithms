var fs = require('fs')
var util = require('util')
var assert = require('assert')
var bst = require('../../binarySearchTree')

function dump (list) {
    console.log(util.inspect(list, null, null))
}

// vvv May use `bst.insertion` rather than append
function addStation(list, object) {
    var node = { object: object }
    if (list.right == null) {
        list.right = node 
    } else {
        //append(list.right, object)
        bst.insertion(list.right, object)
    }
}

// vvv `append` is one way to set up a binary tree.
// may also use `bst.insertion`.
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

function treeDepth(node) {
    return bst.depth(node.right)
}

// vvv Travel skips the head node and calls visit. This is done.
function travel (head, visitor) {
    bst.treeWalk(head.right, visitor)
}

function boundaryMin(head) {
    return bst.minValue(head.right)
}

function boundaryMax(head) {
    var node = bst.maxValue(head.right)
    return node
}

function find (head, city) {
    return bst.search(head.right, city)
}

function insert (head, node) {
    head.right = bst.insertion(head.right, node)
    return head 
}

function removeStop (head, city) {
    head.right = bst.deletion(head.right, city)
    return head
}

function main () {
    var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
    var popped = lines.pop()
    var head  = { right: null }
    
    lines.forEach(function (line) {
        var userObject = object(line)
        addStation(head, userObject)
    })

    console.log(head)
    dump(head)

    travel(head, function (object) { // the anonymous function is visitor 
        console.log(object.city)
    })
    
    var treeMax =  boundaryMax(head)
    var treeMin =  boundaryMin(head)
    var hammond = find(head, 'Hammond')
    console.log(treeMax)
    console.log(treeMin)
    console.log(hammond)

    var Amherst = { station: 'no station', 
                    city: 'Amherst',
                    state: 'New Hampshire' }
    head = insert(head, Amherst)
    var Hanover = { station: 'no station',
                    city: 'Hanover',
                    state: 'New Hampshire' }

    console.log(head)

    head = insert(head, Hanover)
    console.log(head)

    // These stations represent the four cases
    head = removeStop(head, 'Albion')
    head = removeStop(head, 'Kalamazoo')
    head = removeStop(head, 'Michigan City')
    head = removeStop(head, 'Hammond')

    travel(head, function (object) { // the anonymous function is visitor
        console.log(object.city)
    })

    console.log(treeDepth(head))

}

main()
