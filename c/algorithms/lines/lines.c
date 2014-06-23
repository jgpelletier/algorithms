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

#define BUFFER_SIZE 1024// symbolic constant
// Dynamic memory: memory is managed explicitly and flexibly
// Typically, it is taken from the heap. External fragmentation
// -- small gaps between allocated blocks --is a problem.
struct _file_info *share_info (int lines, size_t length, int error) // <-definition
{
    struct _file_info *info = malloc(sizeof(struct _file_info));
    info->lines = lines;
    info->length = length;
    info->error = error;
    return info;
}

struct _file_info2 *share_info2 (int lines, size_t length) // <-definition
{
    struct _file_info2 *info2 = malloc(sizeof(struct _file_info2));
    info2->lines = lines;
    info2->length = length;
    return info2;
}

// no dynamic memory allocation
struct _file_info3 share_info3 (int lines, size_t length)
{
    struct _file_info3 info;
    info.lines = lines;
    info.length = length;
    return info;
}

struct _file_info *line_count (const char* fname) // <-definition
{
    // The types below are automatic variables, and they rely on automatic storage
    // This means the variables are declared within the function and are created
    // when the function is called. Scope is restricted to the function, and
    // their lifetime is limited to the time the function is executing
    size_t i, length;// automatic storage class
    int at_eof, lines, count, error;// automatic storage class
    FILE *f;// automatic storage class
    struct _file_info *info;// automatic memory
    //reserving memory at compile time removes the valgrind error.
    // variables declared as static inside a function are statically allocated,
    // thus keep their memory cell throughout all program execution, while
    // having the same scope of visibility
    static char buffer[BUFFER_SIZE];//  storage class
    error = 0;
    if ((f = fopen (fname, "r")) != NULL) {
        lines = 0;
        count = -1;
        do {
            count ++;
            length = fread(buffer, sizeof(char), sizeof(buffer), f);
                if (length == sizeof(buffer)) {
                    at_eof = 0;
                }
                else if (feof(f)) {
                    length = length + (count * sizeof(buffer));
                    at_eof = 1;
                } else {
                    perror("fclose error");
                    error = -1;
                }

           for (i = 0; i < length; i++) {
                if (buffer[i] == '\n') lines++;
           }
        } while (at_eof == 0);
        if (fclose(f) != 0) {
            perror("fclose error");
        } else {
            info = share_info(lines, length, error);
            return info;
        }

    } else {
        length = -1;
        lines = -1;
        error = -1;
        info = share_info(lines, length, error);
        printf("fopen failed, errno = %d\n", errno /* <- not "thrown" */);
    }

    return info;
}

void line_count_2 (const char* fname, struct _file_info2 **info2, int *error) // <-definition

{
    static char buffer[BUFFER_SIZE];
    size_t i, length;
    int at_eof, lines, count;
    FILE *f;
    if ((f = fopen (fname, "r")) != NULL) {
        lines = 0;
        count = -1;
    } else {
        *error = -1;
        printf("fopen failed, errno = %d\n", errno);
    }

    do {
        count ++;
        length = fread(buffer, sizeof(char), sizeof(buffer), f);
            if (length == sizeof(buffer)) {
                at_eof = 0;
            }
            else if (feof(f)) {
                length = length + (count * sizeof(buffer));
                at_eof = 1;
            } else {
                perror("fclose error");
                *error = -1;
            }

       for (i = 0; i < length; i++) {
            if (buffer[i] == '\n') lines++;
       }
    } while (at_eof == 0);

    if (fclose(f) != 0) {
         *error =  -1;
        perror("fclose error");
    } else {
        *info2 = share_info2(lines, length);
    }
}


void line_count_4 (const char* fname, int *lines, int *length, int *error) // <-definition
{
    //conflict btw paramter in variable
    char buffer[BUFFER_SIZE]; //with static storage class there is a seg fault
    size_t i, len;
    int at_eof, count, line_count, err;
    FILE *f;// automatic storage class
    err = 0;
    line_count = 0;
    len = 0;
    if ((f = fopen (fname, "r")) != NULL) {
        count = -1;
        do {
            count ++;
            len = fread(buffer, sizeof(char), sizeof(buffer), f);
                if (len == sizeof(buffer)) {
                    at_eof = 0;
                }
                else if (feof(f)) {
                    len = len + (count * sizeof(buffer));
                    at_eof = 1;
                } else {
                    perror("fclose error");
                    err = -1;
                }

           for (i = 0; i < len; i++) {
                if (buffer[i] == '\n') {// conditional jump?
                    line_count++;
                }
           }

           *length = len;

        } while (at_eof == 0);

        *lines = line_count;

        if (fclose(f) != 0) {
            err = -1;
            perror("fclose error");
        }
    } else {
      err = -1;
        printf("fopen failed, errno = %d\n", errno /* <- not "thrown" */);
    }
    *error = err;
}

// how do I implement the function below.
void line_count_3 (const char* fname, struct _file_info3* info3, int* error)
{
    char buffer[BUFFER_SIZE];
    size_t i, len;
    int at_eof, count, line_count, err;
    FILE *f;
    line_count = 0;
    err = 0;
    len = 0;

    if ((f = fopen (fname, "r")) != NULL) {
        count = -1;
        do {
            count ++;
            len = fread(buffer, sizeof(char), sizeof(buffer), f);
                if (len == sizeof(buffer)) {
                    at_eof = 0;
                }
                else if (feof(f)) {
                    len = len + (count * sizeof(buffer));
                    at_eof = 1;
                } else {
                    perror("fclose error");
                    err = -1;
                }

           for (i = 0; i < len; i++) {
                if (buffer[i] == '\n') {
                    line_count++;
                }
           }
        } while (at_eof == 0);

        info3->length = len;
        info3->lines = line_count;

        if (fclose(f) != 0) {
            err = -1;
            perror("fclose error");
        }
    } else {
        err = -1;
        printf("fopen failed, errno = %d\n", errno);
    }
    *error = err;
    printf("err: %d\n", err);
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
