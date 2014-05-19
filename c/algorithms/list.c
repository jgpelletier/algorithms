#include <stdlib.h>
#include <stdio.h>
#include <assert.h>

/* create a list node structure to store ints.  */
struct node {
    int value;
    struct node* next;
};

struct node *list, *node; //variables and type

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
    struct node *list = malloc(sizeof (struct node));//call to malloc creates node
    list->next = NULL;
    list->value = 0;
    //list = node;

    struct node *node = malloc(sizeof (struct node));
    node->next = list->next;
    node->value = 5;
    list->next = node;

    /* print the value of every node in the list. one node at a time. one node
     * on a line. */
    while (list->next) {
    printf("value: %d\n", list->next->value);
    list = list->next;
    }
    /* free all nodes. */
    free(node);
    free(list);
    //free(list);
   /* this is only releasing one block of memory*/
   /*do { // we always know we have at least one; head node.
       printf("inside\n");
       node = list;
       list = list->next;
       free(node);
       } while (list);
   */
   return 0;
}
