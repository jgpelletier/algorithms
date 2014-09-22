#include <stdio.h>
#include <stdlib.h>
#include "node_pool.h"

void np_initialize(np_pool_t *node_pool, size_t node_size, void *memory, size_t memory_size)
{
    node_pool -> unused = memory;
    node_pool -> stop = node_pool -> unused + memory_size;
    node_pool -> free_node = NULL;
    node_pool -> node_size = node_size;
}

void* np_allocate(np_pool_t* node_pool)
{
    if (node_pool->free_node) {
        void * node = node_pool->free_node;
        node_pool->free_node = *(void **)node;
        return node;
    }

    if (node_pool->unused + node_pool->node_size < node_pool->stop) {
        void* node= node_pool->unused;
        node_pool->unused += node_pool->node_size;
        return node;
    }

    return NULL;
}

