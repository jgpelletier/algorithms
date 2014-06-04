#include<stdio.h>

int main()
{
    int c;
    int blanks, tabs, newlines;
    int last = EOF;

    blanks = tabs = newlines = 0;
    while ((c = getchar()) != EOF) {
        if (c == ' ')
            blanks++;
        else if (c == '\t')
            tabs++;
        else if (c == '\n')
            newlines++;
        last = c; // <-
    }

    if (last != '\n')// <-
        newlines++;

    printf("Blanks: %d, Tabls: %d, Lines:%d", blanks, tabs, newlines);
    return 0;
}
