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

// THIS NEEDS TO BE TRANSLATED IN JAVASCRIPT

/*
What is node.p? i
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

// Pass in prev as subTree and 
function leftRotate (subTree, node) {
    //assert value
    var head = subTree
    var prev = node
    var y = node.right
    node.right = y.left
    if (y.
   // need a parent is nill 
    if(subtree.right == node) subtree.right = y
    else subtree.left = y
}
 
/*
RIGHT-ROTATE(T,x)
y = x.left
x.left = y.right
if y.right != T.nil
    y.right.p = x
y.p= x.p
if x.p == T.nil
    T.root = y
elseif x == x.p.right
    x.p.right = y
else x.p.left = y    
y.right = x
x.p = y
*/

function rightRotate () {
}
/*
RB-INSERT(T,z)
y = T.nil
x = T.root 
while x != T.nil
    y = x
    if z.key < x:key
        x = x.left 
    else x = x.right
z.p = y 
if y== T.nil
    T.root = z 
elseif z.key < y.key 
    y.left = z
else y.right = z
z.left =  T.nil
z.right = T.nil
z.color = RED 
RB-INSERT-FIXUP(T,z)
*/

// Make RB insert in JavaScript

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
