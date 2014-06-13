#include <stdio.h>
#include <stdlib.h>
#include "lines.h"

int main ()
{
    struct file_info *info;
    info = line_count("wolverineX2.txt");
    printf("If any value is negative then an error occured: error: %d lines: %d length:%d\n", info->error, info->lines, info->length);
    free(info);
    return EXIT_SUCCESS;
}
