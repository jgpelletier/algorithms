#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#include "carry.h"

struct _line_t {
    char line[10];
    struct _line_t*  next;
};


typedef struct _line_t lines;

int carry(const char*fname, struct _line_t* lines);
