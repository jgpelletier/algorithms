#include <stdio.h>
#include <errno.h>
#include "lines.h"

// Comments outline an approach to understand fread and the man pages
// #define BUFFER_SIZE -1
// #define BUFFER_SIZE 0 // <- file is larger than the buffer
// #define BUFFER_SIZE 1 // <- file is larger than the buffer
// #define BUFFER_SIZE 2 // <- file is larger than the buffer
// #define BUFFER_SIZE 3 // <- file is larger than the buffer
// #define BUFFER_SIZE 4 // <- file is just right
// #define BUFFER_SIZE 5 // <- file is smaller than the buffer
// #define BUFFER_SIZE 6 // <- file is smaller than the buffer
// #define BUFFER_SIZE 7 // <- file is smaller than the buffer

        // -- start --
        // length = fread(buffer, sizeof(char), sizeof(buffer), f);
        // ^^^ what values can length be? 0-4

        // size of item: 1
        // count of items: 4
        // not short item count: 4
        // short item count: less than four

        // It is an error to:
        //   call `fread` with a buffer that cannot contain the entire stream.

        // -1 inconcievable. <- error?

        // 0 could mean that the file has no one byte long objects.
        // 0 could mean that an error occurred while reading the 1st byte.

        // 1 could mean that the file has one one byte long object.
        // 1 could mean that an error occurred while reading the 2nd byte.

        // 2 could mean that the file has two one byte long objects.
        // 2 could mean that an error occurred while reading the 3rd byte.

        // 3 could mean that the file has three one byte long objects.
        // 3 could mean that an error occurred while reading the 4th byte.

        // 4 could mean that the file has four one byte long objects.
        // 4 means the buffer is full.

        // How does one know that an error DID NOT occur without checking `ferror`?
        //      If true: You know that an error DID NOT occur. <- !
        //      If false: You do not know that an error DID NOT occur. <- !

        // --- end --

        // short item count? means what
        // if (length < sizeof(buffer)) {
            // could mean?
            //
            // (1) could be an error
            // (2) could mean end of file was reached
        //  } else {
            // no error occurred
        //  }
        //
        //  The flip side is:
        // if (length == sizeof(buffer)) {
        //    // no error occurred
        //  } else {
            // error or eof
        //    if (feof(f)) {
        //        at_eof = 1;
        //    } else {
                // FREAK OUT! Uh, huh!
        //        perror();
        //        return -1;
        //    }
        //  }

       //

#define BUFFER_SIZE 1024

// Counts the lines in the first 1024 bytes of a file.

int line_count (const char* fname) // <- 10
{
    char buffer[BUFFER_SIZE];
    size_t i, length;// size_t is the preferred way to declare variables that hold the size of an object.
    int  lines, at_eof;

    // open the file fname.
    FILE *f; // FILE is the data type used to represent streams. f is a pointer to that file.
    if ((f = fopen (fname, "r")) != NULL ) {

        length = fread(buffer, sizeof(char), sizeof(buffer), f);
        lines = 0;

        if (length == sizeof(buffer)) {
            // no error occurred
            at_eof = 0;
        } else {
            // error or eof
            if (feof(f)) {
                at_eof = 1;
            } else {
                // FREAK OUT! Uh, huh!
                perror("fclose error");
                return -1;
            }
        }

        // do that thing you're supposed to do
        for (i = 0; i < length; i++) {
            if (buffer[i] == '\n') lines++; // <- don't change this
        }

        if (fclose(f) != 0) {
                perror("fclose error");
        } else {
            return lines;
        }

        // account for what happened
        if (at_eof) {
            printf("End of file reached\n");
        }

    } else {
        printf("fopen failed, errno = %d\n", errno /* <- not "thrown" */);
    }
    return -1;
}
