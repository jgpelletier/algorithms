#include <stdio.h>

int main(int argc, char *argv[])
{
    int areas[] = {10, 12, 13, 14, 20};
    char name[] = "Katmandu";
    char nickname[] = {
         'f', 'u', 'r', 'r', 'y',
         'c', 'l', 'o' ,'w', 'n', '\0'
    };

    printf("The size of an int: %u\n", sizeof(int));
    printf("The size of areas (int[]): %u\n",
        sizeof(areas));
    printf("The number of ints in areas: %u\n",
        sizeof(areas) / sizeof(int));
    printf("The first area is %d, the 2nd %d.\n",
         areas[0], areas[1]);

    printf("The size of a char: %u\n", sizeof(char));
    printf("The size of name (char[]): %u\n",
        sizeof(name));
    printf("The number of chars: %u\n",
        sizeof(name) / sizeof(char));

    printf("The size of nickname (char[]): %u\n",
        sizeof(nickname));
    printf("The number of chars: %u\n",
        sizeof(nickname) / sizeof(char));

    printf("name=\"%s\" and nickname=\"%s\"\n",
        name, nickname);

    return 0;
}
