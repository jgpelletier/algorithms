#include <stdio.h>
#include <stdlib.h>
#include "lines.h"

int main ()
{
    int error = 0;
    struct file_info *info;
    struct file_info2* info2;
    info = line_count("wolverineX2.txt");
    printf("If any value is negative then an error occured error: %d lines: %d length:%d\n", info->error, info->lines, info->length);

    line_count_2("_x.txt", &info2, &error);

    printf("If any value is negative then an error occured: error: %d lines: %d length:%d\n", error, info2->lines, info2->length);
 // try a different way.
    free(info);
    free(info2);
    return EXIT_SUCCESS;
}
