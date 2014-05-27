#include <stdlib.h>
#include <stdio.h>

/*
struct node* list_create ()
{
}

void list_delete (struct node* list)
{
}

void list_push (struct node* list)
{
}

void list_print (struct node* list)
{
}
*/

int main ()
{
    /* create a list node structure to store ints.  */
    struct node {
    int value;
    struct node* next;
    };

    //struct node *list, *node; //variables and type

   /* create a linked-list with a head node and one element numbered 5. malloc
     * the head node and the one data node. */
    struct node *head_node; // <- declaration
    head_node = malloc(sizeof (struct node));//call to malloc creates node
    head_node->value = 0;
    head_node->next = NULL;
    struct node *list;
    list = head_node; /* <- this is the head node. don't lose it,*/

    struct node *node; // <- declaration
    node = malloc(sizeof (struct node));//node call to malloc
    node->value = 5;
    node->next = list->next;
    list->next = node;

    node = malloc(sizeof (struct node));//node call to malloc
    node->value = 15;
    node->next = list->next;
    list->next = node;


    /* print the value of every node in the list. one node at a time. one node
     * on a line. */
    node = list;
    while (node->next) {
    printf("value: %d\n", node->next->value);
    node = node->next;
    }

    /* free all nodes. */

    /* head_node is my list */
    /* this is only releasing one block of memory*/
    do { // we always know we have at least one; head node.
       node = list; // <- list is the head of your list
       list = list->next;
       free(node);
       //free(list);
    } while (list);

    return 0;
}
