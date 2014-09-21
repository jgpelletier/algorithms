#include <stdio.h>
#include <stdlib.h>
//#include "bst.h"

// vvv these go in the h file.
struct _bstNode { // <- declaration
    int value;
    struct _bstNode* right;
    struct _bstNode* left;
};

struct _head {// < size of a pointer
    struct _bstNode* right; // <-size of a pointer
};

//  vvv allocation of memory
typedef struct _bstNode node;
typedef struct _head head;
// ^^^^ h file.

#define MAX_NODE 15  // should this be a global variable? should it be in the h file

//static node node_pool[MAX_NODE]; // here is my pool.

                   // vvv passsing in a node from the array and the number
void addValue_array ( /*struct*/ node *node_pool, int number)
{

    //printf("size of node pointer %d and size of max node %d\n", sizeof(node_pool), MAX_NODE);
    //node * node = node_pool[count]; // <- incompatible types
    node_pool-> value = number;
    //node_pool-> right = NULL;
    //node_pool-> left = NULL;
    //node = node_pool;
}
/*
// may be un-needed: No error inside but both append and add throw error the same
// Error: requests for memmber right in somthing not a struct or union.
head * create_head (head * head)
{
    return head->right = NULL; // return from incompatible pointer type.
}
*/

void append(node *head, node *node)
{
    if (head-> right == NULL) { // Error: right in something not a struct or union
        head->right = node; // Error: right in something not a struct or union
    } else {
        append(head->right, node);
    }
}

void add( head * head, node * node)
{
    //node * temp;
    if (head->right == NULL) {// Error: right in something not a struct or union
        head->right = node;
    } else {
        append( head->right, node); // Error: right in something not a struct or union
                            //^^^ 2nd arg is incompatible pointer type

    }
}


void print (node * list) //definition
{
    while (list->right) {
        printf("value: %d\n", list->right->value);
        list = list->right;
    }
}


// I keep trying to return stuctures like objects in JavaScript. I need to
// change the functions so pointers are passed in and void is returned.
int main ()
{
    //statc head head; // this is the head
    static node node_pool[MAX_NODE]; // here is my pool.
    int arr[] = { 9, 4, 8, 7, 0, 10, 5, 14, 1, 11, 24, 19, 18, 34, 17 };
    int i;
    ///* struct */ node *node; //*temp; //<- If removed there is an error.
                                      //   If it stays there is a warning its not be used.

    // ^^^^ REMEMBER THESE ARE STRUCTS: they will go in the h file.

    // values are added to the nodes in the node_pool
    for ( i = 0; i < MAX_NODE; ++i) {
        addValue_array(&node_pool[i], arr[i]);
        printf("%d\n", node_pool[i].value);
    }


    return 0;
}
