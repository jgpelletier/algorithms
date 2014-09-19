#include <stdio.h>
#include <stdlib.h>
#include "bst.h"

#define MAX_NODE 15

int main ()
{
    int arr[] = { 9, 4, 8, 7, 0, 10, 5, 14, 1, 11, 24, 19, 18, 34, 17 }; // Needs an array of random numbers
    int i;
    node *node;
    /*
    // head node for data structure
    struct head {
        node *right;
    };
    */
    printf("The size of the arary %d\n", sizeof(arr));
    printf("The size of a pointer is %d\n", sizeof(node));
    for ( i = 0; i < MAX_NODE; ++i) {
        printf("%d\n", arr[i]);
    }
    return 0;
}
