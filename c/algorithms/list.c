#include <stdlib.h>
#include <stdio.h>

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
    struct node *list;
    list = malloc(sizeof (struct node));//call to malloc creates node
    list->value = 0;
    list->next = NULL;
    struct node *free1;
    free1 = list; /* <- */

    struct node *node;
    node = malloc(sizeof (struct node));//second call to malloc
    node->value = 5;
    node->next = list->next;
    list->next = node;
    struct node *free2;
    free2 = node;

    free3 = node; /* <- nameN makes a body wonder. */

    struct node *node1, *node2, *node3, *node4, *node5, *node6, *node7; /* <- */

    /* print the value of every node in the list. one node at a time. one node
     * on a line. */
    while (list->next) {
    printf("value: %d\n", list->next->value);
    list = list->next; /* <- why? how much $$$ is gcc charging you for variables? */
    }

    /* why is your list no longer your list? why not just call it bob? or why
     * not just call it `yyzxyy12`? */
    /* there is no list. why dispose of your list? */

    /* free all nodes. */

    /* free1 is your list, but you're calling it free1, so it's obviously not
     * considered a list to you anymore. */

    /* gone. */
    free(free1); // <- free(NULL);
    free(free2);
    free(free3);
    free(free4);
    free(free5);
    free(free6);
    free(free7);

    /* this is only releasing one block of memory*/
    /*do { // we always know we have at least one; head node.
       node = list; // <- list is the head of your list
       list = list->next;
       free(node);
       free(list);
    } while (list);
    */
  return 0;
}
