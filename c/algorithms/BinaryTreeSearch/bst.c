#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#include "bst.h"


void np_initialize(node_pool_t node_pool, size_t* node_size, void *memory, size_t memory_size);
{
    node_pool -> unused = memory;
    node_pool -> stop = node_pool > unused + memory_size;
    node_pool -> free_node = NULL;
    node_pool -> node_size = node_size;
}

void addValue_array (node *node_pool, int number)
{
    node_pool-> value = number;
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

struct head* append(struct *head, node *node)
{
    if (head-> right == NULL) {
        head->right = node;
    } else {
        return append(head->right, node);
    }
}

void print (node * list) //definition
{
    while (list->right) {
        printf("value: %d\n", list->right->value);
        list = list->right;
    }
}
*/
