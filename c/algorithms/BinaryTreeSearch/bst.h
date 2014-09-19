// #define MAX_NODE 15 <- how do I define this only once

struct _bstNode {
    int value;
    struct _bstNode* right;
    struct _bstNode* left;
};

typedef struct _bstNode node;

node * create_node(int number);

//void print_city

// What signitures do I need in here?
// maxValue
// minValue
// search
// insertion
// deletion
// depth
