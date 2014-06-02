#include <stdio.h>
#include <string.h>
#include "lines.h"

// Fix, then `#define BUFFER_SIZE 16`.
#define BUFFER_SIZE 1024

int line_count (const char* fname)
{
    char buffer[BUFFER_SIZE]; // <-
    int  i, lines, length;//count;
    lines = 0;

    // open the file fname.
    FILE *f; // FILE is the data type used to represent streams. f is a pointer to that file.
    f = fopen (fname, "r"); // REMEMBER: in c ' ' is very different than " "

    // read the file into a buffer of 1024 bytes
    fread(buffer, sizeof(buffer), 1, f);//
               // ^^^ annoying / use `sizeof`.
               //       `sizeof` does not work with malloced memory
    length = (int)strlen(buffer);
    // you will then go through the buffer counting every `\n`.
    for (i = 0; i < length; i++) {
                 // ^^^ WTF? do NOT use sizeof. Tell me why this is broken.
                 // ^^^ NO!
        if (buffer[i] == '\n') lines++; // <- don't change this
    }

    // close the file*/

    printf("%s\n %d\n, %d\n", &buffer[0], length, sizeof(buffer));

    fclose(f);

    return lines;
}
