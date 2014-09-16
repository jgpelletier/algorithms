var fs = require('fs')
var util = require('util')
var assert = require('assert')
var bst = require('./binarySearchTree')

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
    if (!node) {
        return console.log("nothing immediately")
    }

    if (node.left) {
        visit(node.left, visitor)
    }

    visitor(node.object)

    if (node.right) {
        visit(node.right, visitor)
    }
}

// vvv Travel skips the head node and calls visit. This is done.
function travel (head, visitor) {
    visit(head.right, visitor)
}

function boundaryMin(head) {
    return bst.minValue(head.right)
}

function boundaryMax(head) {
    var node = bst.maxValue(head.right)
    //console.log(node)    
    return node
}

function find (head, city) {
    //console.log(head.right.object.city)
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
/*
//    console.log(head)
    //`dump(head)
    // vvv Call travel. This is done.
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

//    console.log(head)
*/
    head = removeStop(head, 'Niles') 
    travel(head, function (object) { // the anonymous function is visitor
        console.log(object.city)
    })

}

main()
