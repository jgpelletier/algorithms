#include <stdlib.h>
#include <stdint.h>
#include <stdio.h>


int main()
{
    char buffer[2];
    FILE *file;
    size_t length;

    file = fopen("file.txt", "r");

    length = fread(buffer, sizeof(char), sizeof(buffer), file);
    printf("length: %zu\n", length);
    printf("full?: %zu\n", length == sizeof(buffer));
    printf("ferror(file): %d\n", ferror(file));

    fclose(file);

    return EXIT_SUCCESS;
}
