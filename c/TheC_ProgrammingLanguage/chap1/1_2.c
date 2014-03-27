#include<stdio.h>

int main()
{
    // print("\c");< - unknown escape sequance.
    printf("\a"); /*produces sound*/
    printf("backspace");
    printf("\b");
    printf("");
    printf("'t' overwritten");
    printf("\f");
    printf("formfeed effect");
    printf("\nprinted newline\n");
    printf("Carriage return");
    printf("\r");
    printf("\t");
    printf("\v");
    printf("%o 255 in octal\n", 255);
    printf("");
    printf("%x 255 in hex\n, 255");
    return 0;
}
