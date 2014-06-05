#include <stdlib.h>
#include <stdio.h>


int main()
{
    static char memory[1024]; // <- common to all invocation of function.
    char buffer[64];
    int numbers[64]; // <- declared as array, automatically or static.
    int i = 256;
    //char *message = "Hello, World\n";
    char *p; // <- what is it, what size is it? what would be one?
 // ^^^ type name
 //      ^ * makes type a pointer
    char **pp; // <- what is it, what size is it? what would be one?
    uint32_t i32; // <- common typedef, size and signedness.
    char ch;
    printf("int: %zu\n", sizeof(int));
    printf("char: %zu\n", sizeof(char));
    printf("buffer: %zu\n", sizeof(buffer));
    printf("ch: %zu\n", sizeof(ch)); // <- 1
    printf("p: %zu\n", sizeof(p)); // <- 1? why is it 4?
    printf("numbers: %d, %zu\n", 4 * 64, sizeof(numbers));
    printf("i: %zu\n", sizeof(i)); // <- 4
    i = 5;
    printf("i: %zu\n", sizeof(i)); // <- 4
    i = sizeof(buffer);
    printf("i = sizeof(buffer): %zu\n", sizeof(i)); // <- 4
    return EXIT_SUCCESS;
}
