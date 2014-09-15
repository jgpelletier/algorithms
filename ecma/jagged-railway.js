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
    //console.log("\tin visit", node.object.city)
    // (1) If node is null, return nothing immediately.
    if (!node) {
        return console.log("nothing immediately")
    }

    // (2) If node has a left node, call visit passing the left node and the visitor.
    if (node.left) {
      //  console.log('\tleft node', node.left.object.city)

        visit(node.left, visitor)
    }
    //console.log('\tno left node')
    // (3) Call visitor with the node's object.
    //console.log('')
    visitor(node.object)

    //console.log("\tafter visited", node.object.city)

    // (4) If node has a right node, call visit passing the right node and the visitor.
    if (node.right) {
       // console.log('\tright node', node.right.object.city)

        visit(node.right, visitor)
    }
    // how is the parent loaded?
    //console.log("\t-------PARENT NODE--------\n", node)
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

function main () {
    var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n')
    var popped = lines.pop()
    var head  = { right: null }
    
    lines.forEach(function (line) {
        var userObject = object(line)
        addStation(head, userObject)
    })

    //`dump(head)
    // vvv Call travel. This is done.
    travel(head, function (object) { // the anonymous function is visitor 
        console.log(object.city)
    })
    
    var treeMax =  boundaryMax(head)
    var treeMin =  boundaryMin(head)
    console.log(treeMax)
    console.log(treeMin)

   // dump(head)
}

main()
