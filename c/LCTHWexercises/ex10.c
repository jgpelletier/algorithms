#include <stdio.h>

int main(int argc, char *argv[])
{
    int i = 0;

    while (i < argc -1) {
        ++i,
        printf("arg %d: %s\n", i, argv[i]);
    }

    char *states[] = {
        "California", "Oregon",
        "Washington", NULL
    };
    int num_states = 4;

    for(i = 0; i < num_states; i++) {
        printf("state %d: %s\n", i, states[i]);
    }

    return 0;
}
