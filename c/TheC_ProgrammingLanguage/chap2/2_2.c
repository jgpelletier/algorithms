/* Write equivalent to the loop below w/o using && of ||
 *  for (i = 0; i < lim-1 && (c=getchar()) != '\n' && c != EOF; ++i)
 *          s[i] = c;
 *              */

#include<stdio.h>

#define MAXLINE 100

int main(void)
{
    char lim[MAXLINE];
    int c, i;

    i = 0;
    while (i < MAXLINE - 1) {
         if ((c = getchar()) == EOF)
            break;
         else if (c == '\n')
            break;

         lim[i++] = c;
    }
    lim[i] = '\0'; //'\0' - terminates the string.
    printf("%s\n", lim);

    return 0;
}
