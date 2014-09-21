#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#include "bst.h"

void addValue_array (node *node_pool, int number)
{
    node_pool-> value = number;
}

void print (node * list) //definition
{
    while (list->right) {
        printf("value: %d\n", list->right->value);
        list = list->right;
    }
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
