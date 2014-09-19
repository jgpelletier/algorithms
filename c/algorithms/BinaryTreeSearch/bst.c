#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#include "bst.h"

#define MAX_NODE 15

struct node *create_node (int number, int count)
{
    static struct node node_pool[MAX_NODE];
    //static int next_node = 0;

    printf("size of node pointer %d and size of max node %d\n", sizeof(node_pool), MAX_NODE);
    struct  node * node = (node_pool[count]);
    node-> value = number;
    // node-> right = NULL;
    //node-> left = NULL;
    return node;
}
/*
struct head* add(struct head* head, struct node*node)
{
    if (head->right == NULL) {
        return head->right = node;
    } else {
       return append(head->right, node);
    }
}

struct head* append(struct *head, node *node)
{
    if (head-> right == NULL) {
        head->right = node;
    } else {
        return append(head->right, node);
    }
}
*/
