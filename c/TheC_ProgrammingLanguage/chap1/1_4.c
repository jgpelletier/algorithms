#include<stdio.h>

int main()
{
    printf(" Cº Fº\n");
    float celsius;
    for( celsius = 0; celsius <= 300; celsius += 20)
        printf("%3.0f %6.1f\n", celsius, 32.0 + celsius/(5.0/9.0));
    return 0;
}
