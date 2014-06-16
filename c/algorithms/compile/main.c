#include <stdio.h> // <- 2000 lines
#include "compile.h"
#include "module.h"

int main()
{
    printf(greeting); // <- greeting as function pointer
    int *pi = get_number(greeting); //returns an int
    return *pi;
}
