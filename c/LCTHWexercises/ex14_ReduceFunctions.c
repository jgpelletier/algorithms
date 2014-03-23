#include <stdio.h>
#include <ctype.h> //<-this is a new library

int main(int argc, char *argv[])
{
    int i = 0;

    for(i = 1; i < argc; i++) { //<- this is the prints_argument function loop
            int j = 0;

            for(j = 0; argv[i][j] != '\0'; j++) { //<- this is the print_letters function loop
                char ch = argv[i][j];

                if(isalpha(ch) || isblank(ch) || isdigit(ch)) { //<- this is can_print_it function
                   printf("%c == %d ", ch, ch);
                    }
                printf("\n");
            }
    }
    return 0;
}
