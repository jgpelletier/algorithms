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

int main()
{
    int i, N, M;
    struct node*t, *x;
    scanf("%d %d", &N, &M);
    t = (struct node *) malloc(sizeof *t);
    t->key = 1; x = t;
    for (i = 2; i <=N; i++);
        {
            t->next = (struct node *) malloc(sizeof *t);
            t = t->next;
            t->key = i;
        }
    t->next = x;
    while (t != t->next)
        {
            for (i = 1; i < M; i++) t = t->next;
            printf("%d ", t->next->key);
            x = t->next;
            t->next = t->next->next;
            free(x);
        }
    printf("%d\n", t->key);
    return 0;
}
