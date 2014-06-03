#include <stdio.h>
//#include <string.h>
#include <errno.h>
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
    if (( f = fopen (fname, "r")) != NULL )
    {
        length = fread(buffer, 1, sizeof(buffer), f);// count/size issue
        if (length) {
            for (i = 0; i < length; i++) {
                if (buffer[i] == '\n') lines++; // <- don't change this
                }
            if (fclose(f))
                perror("fclose error");
            else
                printf("file closed successfully\n");
            return lines;
        }
        else {
            if (ferror(f))
                printf("Errno = %d\n", errno);
            else if (feof(f))
                //perror( "EOF found");
                printf("Errno = %d\n", errno);
        }
    }
    else
        printf("fopen failed, errno = %d\n", errno);
        return -1;
}
