//Rewrite the temperature conversion program of Section 1.2
//to use a function conversion.
#include <stdio.h>

float fahr_to_celsius(float fahr)
{
    float celsius;
    celsius = (5 * (fahr - 32) / 9);
    return celsius;
}

int main()
{
    float fahr, celsius;
    float lower, upper, step;

    lower = 0;
    upper = 300;
    step  = 20;

    fahr = lower;
    while (fahr <= upper) {
        celsius = fahr_to_celsius(fahr);
        printf("%3.0f %6.0f\n", fahr, celsius);
        fahr = fahr + step;
    }
    return 0;
}
