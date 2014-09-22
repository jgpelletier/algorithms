#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#include "bst.h"


/*
node_t intializeTree (node_t node) 
{
     node.data =  NULL;
     node.right =  NULL;
     node.left = NULL;
     return node;
}
*/

void add_node(node_t tree, node_t * node, int * value)
  // ^^^ Camel case is for JavaScript. Not for C.
{
    node->data = value;
    tree.right->right= node;
    //return tree;
}

/*
void add(node*node_pool, node**node)
{
    if (node == NULL) {
        node->value = &node_pool->value;
        //printf("%d\n", node->value);
    } else {
       return append(head->right, node);
    }
}

*/
