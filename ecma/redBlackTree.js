// This is the psuedo code taken from introduction to algorithms

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
