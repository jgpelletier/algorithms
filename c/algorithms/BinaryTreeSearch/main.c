#include <stdio.h>
#include <stdlib.h>
#include "bst.h"
#include "node_pool.h"
// understand vvv this function.
//int compare(const void* a, const void* b) { return (*(int*)a - *(int*)b; }

// process node
int main ()
{
    node_t nodes[MAX_NODE];
    node_t tree;

    np_pool_t node_pool;
    
    //initializeTree(tree);

    np_initialize (&node_pool, sizeof(node_t), nodes, sizeof(nodes));


    static int arr[15] = { 9, 4, 8, 7, 0, 10, 5, 14, 1, 11, 24, 19, 18, 34, 17 };
    int i;
    // values are added to the nodes in the node_pool. this may need to be
    // made a function/
    for ( i = 0; i < MAX_NODE; ++i) {
        add_node(tree, np_allocate(&node_pool), &arr[i]);
    }

    return 0;
}
