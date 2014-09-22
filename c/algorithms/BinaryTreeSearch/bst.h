#define MAX_NODE 15


struct _bstNode {
    void *data;
    struct _bstNode* right, *left, *parent;
};

struct _bstNode_pool {
    char *unused;
    char*stop;
    size_t node_size;
    void* free_node;
};
/*
struct _bstTree {
    int (*compare) __P(( const void *, const void *));
    struct node root; // <-need to understand this
    struct node nil; // <-need to understand this
};
*/
typedef struct _bstNode node_t;
typedef struct _bstNode_pool node_pool_t;
//typedef struct _bstTree tree_t;

void np_initialize(node_pool_t *node_pool, size_t node_size, void *memory, size_t memory_size);

//void addValue_array (node *node_pool, int number);
//void add( node *node_pool, node**node);

//void print_city

// What signitures do I need in here?
// maxValue
// minValue
// search
// insertion
// deletion
// depth
