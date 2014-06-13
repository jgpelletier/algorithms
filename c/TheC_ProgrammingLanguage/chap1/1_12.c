#include<stdio.h>

int main()
{
   int c;
   int space;

   space = 0;
   while((c = getchar()) != EOF) {
    if (c == ' ' || c == '\t' || c == '\n') {
        putchar('\n');
        space = 1;
    } else {
        if (space == 1)
            putchar(c);
            space = 0;
            }
    }
    return 0;
}
