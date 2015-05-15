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
    node.right = y.left
    if (y.left != null && head != node) y.prev.left = node
    if (node.prev == null) {
        head = y
        head.prev = null
    }
    else if (node == node.prev.left) {
        node.prev.left = y
        y.prev = node.prev
    } else {
        node.prev.right = y
        y.prev = node.prev
    }
    y.left = node
    node.prev = y 
    if (node.right != null && node.right.object == node.prev.object) node.right = null
    return head
}

function rightRotate (head, node) {
    var y = node.left
    node.left = y.right
    if (y.right != null && head != node) y.prev.right = node
    if (node.prev == null) {
        head = y
        head.prev = null
    } 
    else if (node == node.prev.right) {
        node.prev.right = y
        y.prev = node.prev
    } else {
        node.prev.left = y
        y.prev = node.prev
    }
    y.right = node
    node.prev = y 
    if (node.left != null && node.left.object == node.prev.object) node.left = null
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
            } else {
                if (userNode == userNode.prev.right) {
                    userNode = userNode.prev
                    head = leftRotate(head, userNode)
                }
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
            else {
                if (userNode == userNode.prev.left) {
                    userNode = userNode.prev
                    head = rightRotate(head, userNode)
                }
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

function rbDeletion (node, valueObject) {
    var head  = node
    var prev = node
    var y = valueObject 
    while (node && node.object.city != value) {
        prev = node
        if (node.object.city > value) node = node.left
        else node = node.right
    }
    
    if (!node.left) {
        return rbTransplant(head, prev, node, node.right) // <- can't return
    } 
    else if (!node.right) {
        return rbTransplant(head, prev, node, node.left) // <- can't return
    } else {
        var min = { object: minValue(node.right) } 

        if (node.right.object.city != min.object.city) {
            return rbTransplant(head, prev, node, min) // <- can't return
        }

        return rbTransplant(head, prev, node, min) // <- can't return
    }

    // if (y.color == BLACK)
    // RB-DELETE-FIXUP.T;

}

rbTransplant (head, prev, node, min) {
    
}
/*
Taken from Algorithms
The procedure for deleting a node from a red-black tree is based on the TREEDELETE procedure (Section 12.3). First, we need to customize the TRANSPLANT
subroutine that TREE-DELETE calls so that it applies to a red-black tree:


RB-TRANSPLANT(T, u, v)
1 if u.p == T.nil
2   T.root = v
3 elseif u == u.p.left
4   u.p.left = v
5 else u.p.right == v
6   v.p = u.p
*/

/*
RB-DELETE-FIXUP.T; x/
1 while x ¤ T:root and x:color == BLACK
2 if x == x:p:left
3 w D x:p:right
4 if w:color = = RED
5 w:color D BLACK // case 1
6 x:p:color D RED // case 1
7 LEFT-ROTATE.T; x:p/ // case 1
8 w D x:p:right // case 1
9 if w:left:color == BLACK and w:right:color = = BLACK
10 w:color D RED // case 2
11 x D x:p // case 2
12 else if w:right:color == BLACK
13 w:left:color D BLACK // case 3
14 w:color D RED // case 3
15 RIGHT-ROTATE.T; w/ // case 3
16 w D x:p:right // case 3
17 w:color D x:p:color // case 4
18 x:p:color D BLACK // case 4
19 w:right:color D BLACK // case 4
20 LEFT-ROTATE.T; x:p/ // case 4
21 x D T:root // case 4
22 else (same as then clause with “right” and “left” exchanged)
23 x:color D BLACK
*/


exports.depth = depth
exports.rbInsert = rbInsert
exports.treeWalk = treeWalk
exports.deletion = deletion
