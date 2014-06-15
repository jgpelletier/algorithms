#include <stdio.h>
#include <stdlib.h>
#include "lines.h"

void call_line_count ()
{
    struct file_info *info;
    info = line_count("wolverineX2.txt");
    printf("If any value is negative then an error occured. "
        "error: %d lines: %d length: %d\n", info->error, info->lines, info->length);
    free(info);
}

void call_line_count_2 ()
{
    int error = 0;
    struct file_info2* info2;
        // ^^^ raw material for 12 different API calls.
        //          words, words, words

    line_count_2("_x.txt", &info2, &error);
    printf("If any value is negative then an error occured. error: %d lines: %d length:%d\n", error, info2->lines, info2->length);
 // try a different way.
    free(info2);    // <- why is this necessary?
    free(&error);   // <- necessary?
}

int main ()
{
    call_line_count();
    call_line_count_2();
    return EXIT_SUCCESS;
}
