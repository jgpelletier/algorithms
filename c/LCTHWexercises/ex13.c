#include <stdio.h>
#include <ctype.h>

int main(int argc, char *argv[])
{
    if(argc != 2) {
        printf("ERROR: you need one argument.\n");
        //this is how you abort a program
        return 1;
    }

    int i;
    for(i = 0; argv[1][i] != '\0'; i++) {
        char letter = tolower(argv[1][i]); //<-tolower converts character to lowercase

        switch(letter) {
            case 'a':
                printf("%d: 'A'\n", i);
                break;

            case 'e':
                printf("%d: 'E'\n", i);
                break;

            case 'i':
                printf("%d: 'I'\n", i);
                break;

            case 'o':
                printf("%d: 'O'\n", i);
                break;

            case 'u':
                printf("%d: 'U'\n", i);
                break;

            case 'y':
                printf("%d: 'Y' is sometimes a vowel\n", i);
                break;

            default:
                printf("%d: %c is not a vowel\n", i, letter);
       }
   }
   return 0;
}
