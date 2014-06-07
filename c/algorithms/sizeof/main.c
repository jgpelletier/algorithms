#include <stdlib.h>
#include <stdint.h>
#include <stdio.h>

// 32-bit registers.

struct frame_s {
    int count; // <- count
    char body[]; // <- bytes
};

// offset_of(struct frame_s, body) // at which byte does body occur? probably 4.

#define LAST_ATTRIBUTE_TYPE 0
#define COLOR_ATTIRBUTE_TYPE 1
#define BRIGHTNESS_ATTRIBUTE_TYPE 2
#define POWERED_ATTRIBUTE_TYPE 3

#define LIGHT_BULB_DEVICE 1

struct attribute_s {
    int type;
    char *value;  // <- "0", `strdup`.
};
typedef struct attribute_s attribute_t;// _t is common practice to define the size
// ^^^ learn?
// struct attribute_s is type defined as attribute_t
typedef attribute_t* ptr_attribute_t;
     // ^^^ gets complicated
// struct attribute_s* is type defined as ptr_attribute_t

typedef unsigned int uword_t; // <- having a unversal definiton.
typedef unsigned long udword_t; // <- having a unversal definiton.
// ^^^ alias mechanism, and that's all it is.

typedef struct attribute_s ** attrs_t;

typedef int fred;

typedef int (*arithmetic_t)(int, int); // <- come back to it.

struct device_s {
    int type;
    int count;
    attribute_t *attributes;
};

// 32-bits, a word, a word defined by the machine architecture.

// 0,1,2,3,4,5,6,7
// |-----| |-----|
//   |-----|
struct padded_s {
    char type; // <- starts at 0 occupies 1 byte
    int count; // <- starts at 4
    attribute_t *attributes;
};

#define FOUR 4

int main()
{
    static char memory[1024]; // <- common to all invocation of function.
    char buffer[64 * FOUR /* <- more folding */];
            // ^^^ the compiler sees this but...
    int numbers[64]; // <- declared as array, automatically or static.
    int i = 256;
    int x = 16;
    //char *message = "Hello, World\n";
    char *p; // <- what is it, what size is it? what would be one?
 // ^^^ type name. Pointer size is machine specific and is typically the same size regardless of type
 //      ^ * makes type a pointer
    char **pp; // <- what is it, what size is it? what would be one?
    uint32_t i32; // <- common typedef, size and signedness.
    int *nums;
    fred j;
    int **p_nums;
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
                                     // ^^^ not a function, an expression
    printf("nums: %zu\n", sizeof(nums)); // <- 4
    printf("p_nums: %zu\n", sizeof(p_nums)); // <- 4
    nums = numbers;
    nums = malloc(sizeof(int) * x); // <- is standard C library, but not language.
               // ^^^ the compiler forgets this...
   // ... it cannot see from ^^^ there to
   // ^^^ there.
        // ^^^ a function
    printf("nums: %zu\n", sizeof(nums)); // <- 4
    // ^^^ standard library, not language.
    free(nums);

    printf("struct attribute_s: %zu\n", sizeof(struct attribute_s)); // <- 8
    printf("attribute_t: %zu\n", sizeof(attribute_t)); // <- 8
    printf("struct device_s: %zu\n", sizeof(struct device_s)); // <- 12
    printf("struct padded_s: %zu\n", sizeof(struct padded_s)); // <- 12

    return EXIT_SUCCESS;
}
