#include <stdlib.h>
#include <stdio.h>

//Read K&R 6.7 to learn about typedef.
typedef struct node_s node_t;// synonyms
//typedef void (*list_func_t)(node_t *node);// what are these? Is the later the head node?

struct node_s {
    int value;
    node_t *next;
};

//Explain the code below. Is this the intialization funtion?
//Explain why there are no parameters.
node_t *create_list ()
{
    node_t *list;
    list = malloc(sizeof(node_t));
    list->value = 0;
    list->next = NULL;
    return list;
}

void push (node_t *list, int value)
{
    node_t *node;//what is this...
    node = malloc(sizeof(node_t));
    node->value = value;
    node->next = list->next;
    list->next = node;
}

void dump (node_t *list)
{
    while (list->next) {
        printf("value: %d\n", list->next->value);
        list = list->next;
    }
}

void delete_list (node_t *list)
{
    node_t *node;
    do { // we always know we have at least one; head node.
        node = list;
        list = list->next;
        free(node);
    } while (list);
}

//void call_list_func (list_func_t list_func, node_t *list)
//{
//    list_func(list);
//}

int main()
{
    //list_func_t list_func;//typedef?
    node_t *list;//typedef?
    list = create_list();
    push(list, 12);
    push(list, 37);
    push(list, 99);
    dump(list);

    //list_func = dump;

    //call_list_func(dump, list);
}
