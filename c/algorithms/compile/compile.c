#include <stdio.h>

static int i = 0; // <- static is local to `compile.c`.

char greeting[] = "Hello, World!\n";

int *get_number(const char *message) // <- definition
{
    printf(message);
    return &i;  // <- body
}
