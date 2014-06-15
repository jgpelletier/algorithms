#include <stdio.h>

int main(int argc, char *argv[])
{
    if(argc != 2) {
        printf("This needs an argument.\n");
        return 1;
    }

    int i = 0;
    char letter;
    for(i = 0; argv[1][i] != '\0'; i++)
        for( letter = argv[1][i]; letter < '''; letter += ' ') {
            return letter;

   }
}
