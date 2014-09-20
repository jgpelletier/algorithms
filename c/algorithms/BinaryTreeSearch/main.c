#include <stdio.h>
#include <stdlib.h>
//#include "bst.h"

// vvv these go in the h file.
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
// ^^^^ h file.

#define MAX_NODE 15  // should this be a global variable? should it be in the h file

//static node node_pool[MAX_NODE]; // here is my pool.

                   // vvv passsing in a node from the array and the number
node *create_node ( /*struct*/ node *node, int number)
{

    //printf("size of node pointer %d and size of max node %d\n", sizeof(node_pool), MAX_NODE);
    //node * node = node_pool[count]; // <- incompatible types
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

/*
head * add( head head, node* node)
{
    //node * temp;
    if (head->right = NULL) {
        head->right = node; // <- why did this not return the 1st time through?
        return head;
    } else {
       //temp = head->right;
        append( head->right, node);
    }
    return head;
}

*/

void print (node * list) //definition
{
    while (list->right) {
        printf("value: %d\n", list->right->value);
        list = list->right;
    }
}

int main ()
{

    static node node_pool[MAX_NODE]; // here is my pool.
    int arr[] = { 9, 4, 8, 7, 0, 10, 5, 14, 1, 11, 24, 19, 18, 34, 17 };
    int i;
    /* struct */ node *node, *temp;
    /* struct */ head *head;
     //head->right = temp; // does head's right element need to be set to NULL?
    // ^^^^ REMEMBER THESE ARE STRUCTS: they will go in the h file.

    //printf("The size of the arary %d\n", sizeof(arr));
    //printf("The size of a pointer is %d\n", sizeof(node));
    for ( i = 0; i < MAX_NODE; ++i) {
        //printf("%d\n", arr[i]);
        node = create_node(&node_pool[i], arr[i]);
        //printf("%d\n", node->value);
        if (temp == NULL) {
            temp = node;
            printf("%d\n", temp ->value);
        }
        /*
        else if (temp->right != node) {
           temp->right = node;
            //printf("%d\n", temp ->value);
        } else {
           while (temp -> right) {
                  temp  =  temp ->right;
            }
            temp->right = node;
            printf("%d\n", temp ->value);
        */
        //}
        //head->right = temp;
    }

    //print(temp);
    return 0;
}
