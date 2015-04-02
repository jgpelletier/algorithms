
/*
PROPERTIES
1. Every node is either red or black.
2. The root is black.
3. Every leaf (NIL) is black.
4. If a node is red, then both its children are black.
5. For each node, all simple paths from the node to descendant leaves contain
the same number of black nodes.
*/



function leftRotate (head, node) {
    var y = node.right
    if (y.left != null) y.prev.left = node
    y.prev = node.prev 
    if (node.prev == null) head = y
    else if(node == node.prev.left) node.prev.left = y
    else node.prev.right = y
    y.left = node
    node.prev = y 
    if (node.right.object == node.prev.object) node.right = null
    return head
}

function rightRotate (head, node) {
    var prev = node
    var y = node.left
    if (y.right != null) y.prev.right = node
    y.prev = node.prev 
    if (node.prev == null) head = y
    else if(node == node.prev.right) node.prev.right = y
    else node.prev.left = y
    y.right = node
    node.prev = y 
    if (node.left.object == node.prev.object) node.left = null
    return head

}

function rbInsert (node, valueObject) {
    var head = node
    var userNode = { object: valueObject,
                     prev: null, 
                     left: null,
                     right: null,
                     color: 'red' }
    while (node) {
        var prev = node
        if (node.object.city > userNode.object.city)  node = node.left
        else node = node.right
    }

    userNode.prev = prev

    if (!prev) {
        return userNode
    } else if (prev.object.city > userNode.object.city) {
        prev.left = userNode
    } else {
        prev.right = userNode
    }

    head = fixUp(head, userNode) 
    return head
}

function fixUp(head, userNode) {
    if (userNode.prev.prev == null) { 
        userNode.color = 'red'
        head.color = 'black'
        return head
    }
   
   while (userNode.prev && userNode.prev.color == 'red') {
       if (userNode.prev.prev && userNode.prev.prev.left == userNode.prev) { 
            var y = userNode.prev.prev.right
            if (y && y.color == 'red') { 
                userNode.prev.color = 'black'
                y.color = 'black'
                userNode.prev.prev.color = 'red'
                userNode = userNode.prev.prev
            }
            else if (userNode == userNode.prev.right) {
                userNode = userNode.prev
                head = leftRotate(head, userNode)
            } else {
                userNode.prev.color = 'black'
                userNode.prev.prev.color = 'red'
                head = rightRotate(head, userNode.prev.prev)
            }
        } else {
            var y = userNode.prev.prev.left
            if (y && y.color == 'red') {
                userNode.prev.color = 'black'
                y.color = 'black'
                userNode.prev.prev.color = 'red'
                userNode = userNode.prev.prev
            }
            else if (userNode == userNode.prev.left) {
                userNode = userNode.prev
                head = rightRotate(head, userNode)
            } else { 
                userNode.prev.color = 'black'
                userNode.prev.prev.color = 'red'
                head = leftRotate(head, userNode.prev.prev)
            }
        }
        head.color = "black"
    }
    return head
}


function treeWalk (node, visitor) {
    if (!node) {
        return console.log("nothing immediately")
    }

    if (node.left) {
        treeWalk(node.left, visitor)
    }

    visitor(node.object)

    if (node.right) {
        treeWalk(node.right, visitor)
    }
}

function depth (node) {
    if (!node) {
        return 0
    } else {
    var lDepth = depth(node.left)
    var rDepth = depth(node.right)

    if (lDepth > rDepth) return(lDepth+1)
    else return (rDepth+1)
    }
}

exports.depth = depth
exports.rbInsert = rbInsert
exports.treeWalk = treeWalk
