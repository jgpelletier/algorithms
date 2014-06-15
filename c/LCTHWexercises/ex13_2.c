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

        if (letter == 'a' || 'e' || 'i' || 'o' || 'u') {
                printf("%d: %c '\n'", i, toupper(letter));
        } else if (letter == 'y') {
                printf("%d: 'Y'\n", i);
        } else {
                printf("%d: %c is not a vowel\n", i, letter);
       }
   }
   return 0;
}
