#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#include "carry.h"

void call_carry()
{
    struct _line_t lines;
    carry ("carry.txt", &lines);
}



int main ()
{
    call_carry();
    return EXIT_SUCCESS;
}
