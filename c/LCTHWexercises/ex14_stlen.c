// Have print_arguments figure how long each argument string is using the strlen
// function, and then pass that length to print_letters. Then, rewrite
// print_letters so it only processes this fixed length and doesn't rely on the
// '\0' terminator.

#include <stdio.h>
#include <ctype.h>
#include <string.h>

void print_letters(char arg[], int length);

void print_arguments(int argc, char *argv[])
{
    int i = 1;

    for(i = 1; i < argc; i++) {
        int length = strlen(argv[i]);
        print_letters(argv[i], length);
    }
}

void print_letters(char arg[], int length)
{
    int i;

    for(i = 0; i < length; i++ ) {
        char ch = arg[i];

        if(isalpha(ch) || isblank(ch)) {
            printf("%c == %d ", ch, ch);
        }
        printf("\n");
    }
}

int main(int argc, char *argv[])
{
    print_arguments(argc, argv);
    return 0;
}
