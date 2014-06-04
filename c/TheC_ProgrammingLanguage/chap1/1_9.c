//write a program to copy input to its output, replacing each string of one or
//more blanks by a single blank
//

#include <stdio.h>

int main()
{
    int c, space;

    space = 0;
    while ((c = getchar()) != EOF)
        if (c == ' ') {
            if (!space) {
               space = 1;
               putchar(c);
            }
        } else {
            space = 0;
            putchar(c);
        }
    return 0;
}
