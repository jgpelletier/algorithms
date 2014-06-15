#include <stdio.h>

int main(int argc, char *argv[])
{
    if(argc != 2) {
        printf("ERROR: you need one argument.\n");
        //this is how you abort a program
        return 1;
    }

    int i;
    for (i = 1; i < argc; i++) {

        int t;
        char letter;

        for (t = 0, letter = argv[i][0]; letter != '\0'; t++, letter = argv[i][t]) {

            switch(letter) {
                case 'a':
                case 'A':
                    printf("%d-%d: 'A'\n", i,t);
                    break;

                case 'e':
                case 'E':
                    printf("%d-%d: 'E'\n", i,t);
                    break;

                case 'i':
                case 'I':
                    printf("%d-%d: 'I'\n", i,t);
                    break;

                case 'o':
                case 'O':
                    printf("%d-%d: 'O'\n", i,t);
                    break;

                case 'u':
                case 'U':
                    printf("%d-%d: 'U'\n", i, t);
                    break;

                case 'y':
                case 'Y':
                    if(i > 2) {
                        // it's only sometimes Y
                        printf("%d-%d: 'Y'\n", i, t);
                    }
                    break;

                default:
                    printf("%d: %c is not a vowel\n", i, letter);
            }
        }
     }
     return 0;
}
