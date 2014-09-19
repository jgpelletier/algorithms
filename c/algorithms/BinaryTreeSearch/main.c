#include <stdio.h>
#include <stdlib.h>
//#include "bst.h"

struct _bstNode {
    int value;
    struct _bstNode* right;
    struct _bstNode* left;
};

struct _head {
    struct _bstNode* right;
};

typedef struct _bstNode node;
typedef struct _head head;

#define MAX_NODE 15

node *create_node (int number, int count)
{
    static  node node_pool[MAX_NODE];
    //static int next_node = 0;

    printf("size of node pointer %d and size of max node %d\n", sizeof(node_pool), MAX_NODE);
    node * node = &(node_pool[count]);
    node-> value = number;
    node-> right = NULL;
    node-> left = NULL;
    return node;
}

node * append(node *head, node *node)
{
    if (head-> right == NULL) {
        head->right = node;
        return head;
    } else {
        return append(head->right, node);
    }
}


head * add( head* head, node* node)
{
    //node * temp;
    if (head->right == NULL) {
        head->right = node;
        return head;
    } else {
       //temp = head->right;
        append( head->right, node);
    }
    return head;
}


void print (head* list) //definition
{
    while (list->right) {
        printf("value: %d\n", list->right->value);
        list = list->right;
    }
}

int main ()
{
    int arr[] = { 9, 4, 8, 7, 0, 10, 5, 14, 1, 11, 24, 19, 18, 34, 17 };
    int i;
    node *node;
    head *head;
        //printf("The size of the arary %d\n", sizeof(arr));
    //printf("The size of a pointer is %d\n", sizeof(node));
    for ( i = 0; i < MAX_NODE; ++i) {
        //printf("%d\n", arr[i]);
        node = create_node(arr[i], i);
        head = add(head, node);
    }

    print(head);
    return 0;
}
