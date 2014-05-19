#include <stdlib.h>
#include <stdio.h>
#include <assert.h>

/* create a list node structure to store ints.  */
struct node {
    int value;
    struct node* next;
};

struct node *head, *z, *t; //variables and type

//algorithms in C list_initialization with head
/*list_initialize()
{
    head = (struct node *) malloc(sizeof *head);//call to malloc creates node
    z = (struct node *) malloc(sizeof *z);
    head->next = z; z->next = z;
}*/

//this is a intializes the list.
struct node *create_list(struct node* next, int value)
{
    struct node *list =  malloc(sizeof(struct node));
    assert(list != NULL);
    list->value = 0;
    list->next = NULL;

    return list;
}

int main ()
{
    /* create a linked-list with a head node and one element numbered 5. malloc
     * the head node and the one data node. */

    head = (struct node *) malloc(sizeof *head);//call to malloc creates node
    z = (struct node *) malloc(sizeof *z);
    head->next = z;
    z->value = 5;

    /* print the value of every node in the list. one node at a time. one node
     * on a line. */
    while (head->next) {
    printf("value: %d\n", head->next->value);
    head = head->next;
    }
    /* free all nodes. */
    return 0;
}
