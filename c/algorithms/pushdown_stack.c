#include <stdio.h>
#include <stdlib.h>

struct node {
    int key;
    struct node *next;
};

struct node *head, *z, *t;

void stackinit()
{
    head = (struct node *) malloc(sizeof *head);
    z = (struct node *) malloc(sizeof *z);
    head->next = z; head->key = 0;
    z ->next = z;
}

void push(int v)
{
    t = (struct node *) malloc(sizeof *t);
    t->key = v; t->next = head->next;// adds node to the head
    head->next = t;
}

int pop()
{
    int x;
    t = head->next; head->next = t->next;//subtracts a node from the head.
    x = t->key;//data stored in node
    free(t);// node is freed
    return x;// new int available to push on the stack
}

int stackempty()//is this only a test or are the 2 blks in use at exit in hear?
{
    return head->next == z;
}

void delete_stack()//not in Sedegwick code.
{
    free(struct z);
    free(head);
}
// how do you release all blks of memory
int main()
{
    stackinit();
    push(5);
    push(9);
    push(8);
    push(pop()+pop());//each pop returns an int, which is pushed on the stack
    push(4);
    push(6);
    push(pop()*pop());
    push(pop()*pop());
    push(7);
    push(pop()+pop());
    push(pop()*pop());
    printf("%d\n", pop());
    //stackempty();
    //delete_stack();
    return 0;


    /* what does scanf need to work?
     *
    char c; int x;
    for (stackinit(); scanf("%1s", &c)!=EOF; )
       {
        x = 0;
        if (c == '+') x = pop()+pop();
        if (c == '*') x = pop()*pop();
        while (c>='0' && c<='9')
            { x = 10*x + (c -'0'); scanf("%1c", &c); }
        push(x);
       }
    printf("%d\n", x);
    return 0;*/
}
