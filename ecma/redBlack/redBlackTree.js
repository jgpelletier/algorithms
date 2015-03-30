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
function leftRotate (head, node) {
    //assert value
    //var prev = node
    var y = node.right
    if (y.left != null) y.prev.left = node
    y.prev = node.prev 
    if (node.prev == null) head = y // error
    else if(node == node.prev.left) node.prev.left = y
    else node.prev.right = y
    y.left = node
    node.prev = y 
    return head
}

function rightRotate (subTree, node) {
    var prev = node
    var y = node.left
    if (y.right != null) y.prev.right = node
    y.prev = node.prev 
    if (node.prev == null) head = y // error
    else if(node == node.prev.right) node.prev.right = y
    else node.prev.left = y
    y.right = node
    node.prev = y 
    return head

}

function rbInsert (node, valueObject) {
    var head = node
    var userNode = { object: valueObject,
                     prev: null, 
                     left: null,
                     right: null,
                     color: 'red' }
   // breaks here 
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
/*
B-INSERT-FIXUP(T,z)
while z.p.color == RED 
    if z.p == z.p.p.left
        y = z.p.p.right 
        if y.color == RED
            z.p.color = BLACK <- case 1
            y.color = BLACK <- case 1
            z.p.p.color = RED <- case 1
            z = z.p.p <- case 1
        else if z == z.p.right 
            z = z.p <- case 2
            LEFT-ROTATE(T, z)<- case 2
        z.p.color = BLACK<- case 3
        z.p.p.color = RED<- case 3
        RIGHT-ROTATE(T,z.p.p)<- case 3
    else (same as then clause
     with “right” and “left” exchanged)
 T.root.color = BLACK
*/
function fixUp(head, userNode) {
    // added
    if (userNode.prev.prev == null) { 
        userNode.color = 'red'
        head.color = 'black'
        return head
    }
   
   while (userNode.prev && userNode.prev.color == 'red') {
       if (userNode.prev.prev && userNode.prev.prev.left == userNode.prev) { //error
            var y = userNode.prev.prev.right
            if (y && y.color = 'red'){
                userNode.prev.color = 'black'
                y.color = 'black'
                user.prev.prev.color = 'red'
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
            if (y && y.color == 'red') { // cannot read color of null
                userNode.prev.color = 'black'
                y.color = 'black'
                userNode.prev.prev.color = 'red'
                userNode = userNode.prev.prev
            }
            else if (userNode == userNode.prev.left) {
                userNode = userNode.prev
                head = rightRotate(head, userNode)
            } else { 
                userNode.prev.color = 'black' // breaks here?
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


exports.rbInsert = rbInsert
exports.treeWalk = treeWalk
