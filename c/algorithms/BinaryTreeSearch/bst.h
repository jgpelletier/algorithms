#define MAX_NODE 15


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

void addValue_array (node *node_pool, int number);

//void print_city

// What signitures do I need in here?
// maxValue
// minValue
// search
// insertion
// deletion
// depth
