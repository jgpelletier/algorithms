#include <stdio.h>

int main()
{
    float fahr, celsius;
    int lower, upper, step;

    lower = 0;      //assignment statment
    upper = 300;    //''    ''   Notice: Individual statements terminated with;
    step = 20;      //''    ''

    printf(" Fº Cº\n");
    fahr = lower;
    while(fahr <= upper) {
        celsius = (5.0/9.0) * (fahr - 32.0);
        printf( "%3.0f %6.1f\n", fahr, celsius);
        fahr = fahr + step;
    }
    return 0;
}
