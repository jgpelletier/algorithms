#include <stdlib.h>
#include <stdio.h>

/* create a list node structure to store ints.  */
struct node {
    int value;
    struct node* next;
};

struct node *create_list()
{
    node *list;
    list = malloc(sizeof(node));
    list->value = 0;
    list->next = NULL;
    return list;
}

int main ()
{
    /* create a linked-list with a head node and one element numbered 5. malloc
     * the head node and the one data node. */

    /* print the value of every node in the list. one node at a time. one node
     * on a line. */

    /* free all nodes. */
    return 0;
}
