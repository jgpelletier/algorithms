#include <stdlib.h>
#include <stdio.h>

#include "list.h"

struct node *list_create () //definition
{
    struct node *list;
    list = malloc(sizeof(struct node));
    list->value = 0;
    list->next = NULL;
    return list;
}

void list_delete (struct node *list) //definition
{
    struct node *node;
    do {
        node = list;
        list = list->next;
        free(node);
    } while (list);
}

void list_push (struct node *list, int value) //definition
{
    struct node *node;
    node = malloc(sizeof(struct node));
    node->value = value;
    node->next = list->next;
    list->next = node;
}

void list_print (struct node *list) //definition
{
    while (list->next) {
        printf("value: %d\n", list->next->value);
        list = list->next;
    }
}
