#include <stdio.h>
//#include <string.h>
#include <errno.h>
#include "lines.h"

// Fix, then `#define BUFFER_SIZE 16`.
#define BUFFER_SIZE 1024

int line_count (const char* fname) // <- 10
{
    char buffer[BUFFER_SIZE];
    size_t i, length;// size_t is the preferred way to declare variables that hold the size of an object.
    int  lines;
    lines = 0;

    // open the file fname.
    FILE *f; // FILE is the data type used to represent streams. f is a pointer to that file.
    if (( f = fopen (fname, "r")) != NULL ) {
        length = fread(buffer, sizeof(char), sizeof(buffer), f); // How do I test if buffer is big enough?
        // How does one know that an error DID NOT occur?
        if (feof(f) && length /* what is the right test? */) {
            for (i = 0; i < length; i++) {
                if (buffer[i] == '\n') lines++; // <- don't change this
            }
            if (fclose(f) != 0)
                perror("fclose error");
            else
                return lines;
        } else if (ferror(f)){
                printf("Error, Errno = %d\n", errno); // how do I return the error msg and not the #?
            //else if (feof(f))
            //    printf("EOF, Errno = %d\n", errno);
        }
    } else {
        printf("fopen failed, errno = %d\n", errno /* <- not "thrown" */);
    }
    return -1; // <- guarded by the else? This is your error.
}
//To learn from
        //if (length) { // <- on the spectrum of wrong this is really wrong
        //if (length > 0) { // <- on the spectrum of wrong this is really wrong
        // This was the question: How do you know that an error DID NOT occur?
        //if (sizeof(length) == sizeof(int)) { // <- on the spectrum of wrong where does this test fall?WRONG
        // if (length >= sizeof(char)) { // <- on the spectrum of wrong where does this test fall?
        //if (*length) {// invalid type argument of unary '*'
        //if (&length) {// the address of length will always evalutate to true
        //if (length == buffer[length]) {// comp btw signed and unsigned int
