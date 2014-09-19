i//#define MAX_NODE 15

//static struct node node_pool[MAX_NODE];

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

struct node * create_node(int number, int count);
struct head * add(struct head*, struct node*);
struct head * append(struct head *, struct node *);

//void print_city

// What signitures do I need in here?
// maxValue
// minValue
// search
// insertion
// deletion
// depth
