#include <stdio.h>

int main(int argc, char *argv[])
{
    int distance = 100;
    float power = 2.345f;
    double super_power = 56789.4532;
    char initial = 'M';
    char last_name[] = "Burns";
    char first_name[] = "Charles";
    char called[] = "Mister or Monty";

    printf("You are %d miles away.\n", distance);
    printf("You have %f levels of power.\n", power);
    printf("you have %f awesome super powers.\n", super_power);
    printf("My favorite character on the Simpsons has an intial %c in his middle name.\n", initial);
    printf("His first name is %s.\n", first_name);
    printf("His last name is %s.\n", last_name);
    printf("He is called %s %s.\n", called, last_name);

    return 0;
}
