#include <stdio.h> // <- 2000 lines
#include "compile.h"
#include "module.h"

int main()
{
    printf(greeting); // <- greeting as function pointer
    int *pi = get_number(greeting); //returns an int
    /**pi = inc_number(*pi); // what was this supposed to be*/
    return *pi;
}
