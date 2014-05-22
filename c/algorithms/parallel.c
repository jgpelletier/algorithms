/* This is taken from the chapter on Elementary Data Structres from
 * Sedgewick's Algorithms in C. */

#include <stdio.h>
#include <stdlib.h>

#define max 16

int key[max+2], next[max+2];
int x, head, z;

void listInitialize()
{
    head = 0; z = 1; x = 2;
    next[head] = z; next[z] = z;
}

void deleteNext(int t)
{
    next[t] = next[next[t]]; // <- no idea what this does.
}

int insertAfter(int v, int t)
{
    key[x] = v; next[x] = next[t];
    next[t] = x;
    return x++; // incrementing replaces calls to malloc
}

/* How do I use these functions in main? For example, what would Sedgewick's example look like? */

int main()
{
    listInitialize();
    insertAfter(4, 8);
    return 0;
}
