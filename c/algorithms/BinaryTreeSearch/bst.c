#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#include "bst.h"

#define MAX_NODE 15

node *create_node (int number)
{
    //var arr = [9, 4, 8, 7, 0, 10, 5, 14, 1, 11, 24, 19, 18, 34, 17]; // Needs an array of random numbers
    static node node_pool[MAX_NODE]; // Needs an array of nodes
    static int next_node = 0;
/*
    if (next_node >= MAX_NODE ) {
        printf("Out of memory\n");
        return (node ) *NULL;
    }
*/
    node * node = &(node_pool[ next_node++ ]);
    node -> value = number;
    node -> right = NULL;
    node -> left = NULL;
    return node;
}
