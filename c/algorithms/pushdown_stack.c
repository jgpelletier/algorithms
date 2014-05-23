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
    t->key = v; t->next = head->next;
    head->next = t;
}

int pop()
{
    int x;
    t = head->next; head->next = t->next;
    x = t->key;
    free(t);
    return x;
}

int stackempty()
{
    return head->next == z;
}

int main()
{
    stackinit();
    push(5);
    push(9);
    push(8);
    push(pop()+pop());
    push(4);
    push(6);
    push(pop()*pop());
    push(pop()*pop());
    push(7);
    push(pop()+pop());
    push(pop()*pop());
    printf("%d\n", pop());
    stackempty();
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
