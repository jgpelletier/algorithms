// This is the psuedo code taken from introduction to algorithms

/*
PROPERTIES
1. Every node is either red or black.
2. The root is black.
3. Every leaf (NIL) is black.
4. If a node is red, then both its children are black.
5. For each node, all simple paths from the node to descendant leaves contain
the same number of black nodes.
*/


/*
What is node.p? the node's parent 
What is T.nil? the roots parent and each leafs nil.
LEFT-ROTATE(SubTree,node)
y = node.right
node.right = y.left
if y.left != T.nil
    y.left.p = node
y.p= node.p
if node.p == T.nil
    T.root = y
elseif node == node.p.left
    node.p.left = y
else node.p.right = y    
y.left = node
node.p = y
*/

// Pass in prev as subTree and node that needs rotation 
function leftRotate (subTree, node) {
    //assert value
    var prev = node
    var y = node.right
    node.right = y.left
    if (subtree.left == null) subtree.right = y
    else if(subtree.left == node) subtree.left = y
    else subtree.right = y
    y.left = node
}

function leftRotate (subTree, node) {
    var prev = node
    var y = node.left
    node.left = y.right
    if (subtree.left == null) subtree.right = y
    else if(subtree.right == node) subtree.right = y
    else subtree.left = y
    y.right = node
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

    // need fix-up 
    return head 
}

function fixUp(head, userNode) {
    while (userNode.color == 'red') {
       if (userNode.prev.object == userNode.prev.prev.left.object) {
            var y = userNode.prev.prev.right
            if (y.color = 'red'){
                userNode.prev.color = 'black'
                y.color = 'black'
                user.prev.prev.color = 'red'
                userNode = userNode.prev.prev
            }
            else if (userNode == userNode.prev.right) {
                userNode = userNode.prev
                leftRotate(userNode.prev, userNode)
            }
            userNode.prev.color = 'black'
            userNode.prev.prev.color = 'red'
            rightRotate(userNode.prev.prev.prev, userNode.prev.prev)
        } else {
            var y = userNode.prev.prev.left
            if (y.color = 'red'){
                userNode.prev.color = 'black'
                y.color = 'black'
                user.prev.prev.color = 'red'
                userNode = userNode.prev.prev
            }
            else if (userNode == userNode.prev.left) {
                userNode = userNode.prev
                rightRotate(userNode.prev, userNode)
            }
            userNode.prev.color = 'black'
            userNode.prev.prev.color = 'red'
            leftRotate(userNode.prev.prev.prev, userNode.prev.prev)
        }
        head.color = "black"
    }
}
/*

B-INSERT-FIXUP(T,z)
while z.p.color == RED 
    if z.p == z.p.p.left
        y = z.p.p.right 
        if y.color == RED
            z.p.color = BLACK 
            y.color = BLACK 
            z.p.p.color = RED 
            z = z.p.p
        else if z == z.p.right 
            z = z.p
            LEFT-ROTATE(T, z)
        z.p.color = BLACK
        z.p.p.color = RED
        RIGHT-ROTATE(T,z.p.p)
     else (same as then clause
     with “right” and “left” exchanged)
 T.root.color = BLACK

*/

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


exports.rbInsert = rbInsert
exports.treeWalk = treeWalk
