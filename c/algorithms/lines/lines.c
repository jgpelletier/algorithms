#include <stdio.h>
#include <string.h>
#include "lines.h"

// Fix, then `#define BUFFER_SIZE 16`.
#define BUFFER_SIZE 1024

int line_count (const char* fname) // <- 10
{
    char buffer[BUFFER_SIZE];
    size_t i, length;//count;
    int  lines;
    lines = 0;

    // open the file fname.
    FILE *f; // FILE is the data type used to represent streams. f is a pointer to that file.
    f = fopen (fname, "r"); // REMEMBER: in c ' ' is very different than " "
    // ^^^ ERROR? <-> SO MANY ERRORS.

    // read the file into a buffer of 1024 bytes
    length = fread(buffer, 1, sizeof(buffer), f);// count/size issue
    // ^^^ ERROR?
    check for eof or error, if error return -1
    // you will then go through the buffer counting every `\n`.
    for (i = 0; i < length; i++) {
        if (buffer[i] == '\n') lines++; // <- don't change this
    }

    // close the file*/

    ///printf("%s\n %d\n %d\n", &buffer[0], length, sizeof(length));

    fclose(f);
    // ^^^ ERROR?

    return lines;
}
