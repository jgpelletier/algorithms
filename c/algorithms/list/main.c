#include <stdio.h>
#include <stdlib.h>
#include "list.h"

int main ()
{
    struct node *list; // <- this is the type that is used
    list = list_create();
    list_push(list, 5);
    list_push(list, 15);
    list_print(list);
    list_delete(list);
    return 0;
}
