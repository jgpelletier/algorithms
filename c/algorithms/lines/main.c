#include <stdio.h>
#include <stdlib.h>
#include "lines.h"

int main ()
{
    struct file_info *info;
    info = line_count("wolverineX2.txt");
    printf("lines: %d length:%d\n", info->lines, info->length);
    free(info);
    return EXIT_SUCCESS;
}
