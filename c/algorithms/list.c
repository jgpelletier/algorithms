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
    free1 = list;

    struct node *node;
    node = malloc(sizeof (struct node));//second call to malloc
    node->value = 5;
    node->next = list->next;
    list->next = node;
    struct node *free2;
    free2 = node;


    /* print the value of every node in the list. one node at a time. one node
     * on a line. */
    while (list->next) {
    printf("value: %d\n", list->next->value);
    list = list->next;
    }

    /* free all nodes. */
    free(free1); // <- free(NULL);
    free(free2);

    /* this is only releasing one block of memory*/
    /*do { // we always know we have at least one; head node.
       node = list;
       list = list->next;
       free(node);
       free(list);
    } while (list);
    */
  return 0;
}
