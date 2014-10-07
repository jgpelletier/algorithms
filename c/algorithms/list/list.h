struct node {//declaration <- nothing extern about it.
    int value;
    struct node *next;
}; //"node;" which followed the } was deleted. Typedef was used instead. see below.

typedef struct node node_t; //this is the allocation of memory

struct node *list_create(void); //declaration
    // ^^^  that's right

void list_delete (node_t *); //declaration
                // ^^^ same as `struct node`

void list_push (struct node *, int); //declaration.

void list_print (struct node *); //declaration
