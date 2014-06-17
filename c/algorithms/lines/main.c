#include <stdio.h>
#include <stdlib.h>
#include "lines.h"

void call_line_count ()
{
    struct _file_info *info;
    info = line_count("wolverineX2.txt");
    printf("If any value is negative then an error occured. "
        "error: %d lines: %d length: %d\n", info->error, info->lines, info->length);
    free(info);
}

void call_line_count_2 ()
{
    int error = 0;
    struct _file_info2* info2;
        // ^^^ raw material for 12 different API calls.
        //          words, words, words

    line_count_2("_x.txt", &info2, &error);
    printf("If any value is negative then an error occured. error: %d lines: %d length:%d\n", error, info2->lines, info2->length);
 // try a different way.
    free(info2);    // <- why is this necessary?
    //free(&error);   // <- necessary? WARNING: ATTEMPT TO FREE A NON-HEAP OBJECT
}

void call_line_count_3 ()
{
    int error = 0;
    int length = 0;
    int lines = 0;

    line_count_4("_x.txt", &lines, &length, &error);
    printf("If any value is negative then an error occured. error: %d lines: %d length:%d\n", error, lines, length);
   // free(info2);    // <- why is this necessary?
   //free(&error);   // <- necessary? WARNING: ATTEMPT TO FREE A NON-HEAP OBJECT
}

int main ()
{
    call_line_count();
    call_line_count_2();
    call_line_count_3();
    return EXIT_SUCCESS;
}
