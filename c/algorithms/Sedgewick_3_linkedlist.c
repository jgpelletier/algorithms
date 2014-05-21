#include <stdlib.h>
#include <stdio.h>

struct node { //the struct is the precise format of lists: lists are made up of nodes
    int key; //key is an interger only for simplicity.
    struct node *next;
};

struct node *head, *z, *t;

void listIintialize()
{
    /* the variable head is a pointer to the next node on the list.
     * node may only be created with a call to malloc. This function
     * to relieves the program from the burden of memory allocation*/
    head = (struct node *) malloc(sizeof *head);//look back in king at use of sizeof and pointer.
    /* creates a new node — a dummy node representing end of list
     * — and puts a pointer to it*/
    z = (struct node *) malloc(sizeof *z);
    head->next = z; z->next = z;//'arrow' notation used to follow pointers through lists.
}
/*
void deleteNext(struct node *t)
{
    t->next = t->next->next;
}

struct node *insertafter(int v, struct node *t)
{
    struct node *x;
    x = (struct node *) malloc(sizeof *x);
    x->key = v; x->next = t->next;
    t->next = x;
    return x;
}
*/


int main()
{
    int i, N, M; //three ints
    struct node*t, *x;//2 struct
    scanf("%d %d", &N, &M);//Scanf reads in the ints from the terminal
    t = (struct node *) malloc(sizeof *t);// allocates memory for node t
    t->key = 1; x = t; //sets t key member to 1 and x is assigned t's members
    for (i = 2; i <=N; i++) //this loop continues until i is less than or equal to N
        {
            printf("%d\n", t->key);
            t->next = (struct node *) malloc(sizeof *t);//allocates memory for next node
            t = t->next;//assigns t.next to the variable t
            t->key = i;//assigns i to t member key
        }
    t->next = x;// assigns x to t->next and completes the cirucular linked list
    while (t != t->next)
        {
            for (i = 1; i < M; i++) t = t->next;//moves through the list until M
            printf("Person # %d is gone.\n", t->next->key);
            x = t->next; //assigns node at M to x
            t->next = t->next->next;//passes node by re-assigning node.next to next node's next
            free(x);//frees the memory for x.
        }
    printf("Person %d remains.\n", t->key);
    return 0;
}
