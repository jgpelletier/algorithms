#define MAX_NODE 15

struct bst_node_s {
    int *data; // does void allow the data value to be multiple types?
    struct bst_node_s* right, *left;//, *parent;
};

struct bst_tree_s {
    struct bst_node_s * head;
};

typedef struct bst_node_s node_t;
typedef struct bst_tree_s tree_t;

node_t* intializeTree (node_t* node);

void  add_node (node_t * tree, node_t *node, int *value);

//void add( node *node_pool, node**node);

//void print_city
