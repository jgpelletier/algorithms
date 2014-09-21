#include <stdio.h>
#include <stdlib.h>
#include "bst.h"


int main ()
{
    static node node_pool[MAX_NODE]; // here is my pool.
    int arr[] = { 9, 4, 8, 7, 0, 10, 5, 14, 1, 11, 24, 19, 18, 34, 17 };
    int i;

    // values are added to the nodes in the node_pool. this may need to be
    // made a function/
    for ( i = 0; i < MAX_NODE; ++i) {
        addValue_array(&node_pool[i], arr[i]);
        printf("%d\n", node_pool[i].value);
    }


    return 0;
}
