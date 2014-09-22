typedef struct np_pool_s np_pool_t;

struct np_pool_s {
    // ^ VEBOTEN!
    char *unused;
    char *stop;
    size_t node_size;
    void* free_node;
};

void np_initialize(np_pool_t *node_pool, size_t node_size, void *memory, size_t memory_size);
void* np_allocate(np_pool_t* node_pool);
