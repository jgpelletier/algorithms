#include <stdio.h>
#include <stdlib.h>
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

#define BUFFER_SIZE 1024// sympbolic constant

struct file_info *share_info (int lines, size_t length)
{
    //there are 2 warnings on the line below.
    //  1) implicit decleration on function "malloc"
    //  2) incompatible implicit declartion of built in
    //     function 'malloc'
    struct file_info *info = malloc(sizeof(struct file_info));
    info->lines = lines;
    info->length = length;
    return info;
}

// count of lines, and the count of characters.
//      how to you "return" two values from a C function?
//                  ^^^ "get out of" -> means of output
//                      how can a C function give?
//                      pointers and structs give values back
struct file_info *line_count (const char* fname) // <- line_count
{
    // This program does not use static memory.
    // The types below are automatic variables, and they rely on automatic storage
    // This means the variables are declared within the function and are created
    // when the function is called. Scope is restricted to the function, and
    // their lifetime is limited to the time the function is executing
    char buffer[BUFFER_SIZE];// automatic storage class
    size_t i, length;// automatic storage class
    int at_eof, lines, count;// automatic storage class
    /*struct file_info {// move to header file or ourside of line_count
        int lines;
        size_t length;
    };*/
    FILE *f;// automatic storage class
    struct file_info *info;// dynamic memory?

    if ((f = fopen (fname, "r")) != NULL) {
        lines = 0;
        count = -1;
        //create struct here?

        do {
            count ++;
            length = fread(buffer, sizeof(char), sizeof(buffer), f);
            //         ^^^ how many values does fread "return" where return means
            //                      "get out of"?
            //             what does fread give you? a binary stream
            //                                    (access to the contents of a file through a pointer)?
            //                                            count of items
            //                                            an error
            //                                            an eof
                if (length == sizeof(buffer)) {
                    at_eof = 0;
                }
                else if (feof(f)) {
                    length = length + (count * sizeof(buffer));
                    at_eof = 1;
                } else {
                    perror("fclose error");
                    return  -1;// return makes pointer from integer wo cast.
                }

           for (i = 0; i < length; i++) {
                if (buffer[i] == '\n') lines++; // <- don't change this
           }
        } while (at_eof == 0);

        if (fclose(f) != 0) {
            perror("fclose error");
        } else {
            //create struct here?
            info = share_info(lines, length);
            return info;
        }

    } else {
        printf("fopen failed, errno = %d\n", errno /* <- not "thrown" */);
    }

    return -1;// return makes pointer from integer wo cast.
}

/*
// implement as linked list.
line_list_t* read_lines (const char* file)
  // ^^^ what is this type?
{
    list_list_t* line_list;
    // ... stuff ...
    //   what goes here?
    return line_list;
}

// what else do you need? what other functions to create a complete API?
*/

/*
line_list_t* read_lines (const char* file)
  // ^^^ what is this type?
{
    char buffer[BUFFER_SIZE];
    size_t i, count;
    int lines, at_eof;

    FILE *f; //
    if ((f = fopen (fname, "r")) != NULL) {
        lines = 0;

        do {
            count = fread(buffer, sizeof(char), sizeof(buffer), f);

                if (count == sizeof(buffer)) {
                    at_eof = 0;
                }
                else if (feof(f)) {
                    at_eof = 1;
                } else {
                    perror("fclose error");
                    return -1;
                }
           }

           for (i = 0; i < length; i++) {
                if (buffer[i] == '\n') lines++; // <- don't change this
           }

*/
