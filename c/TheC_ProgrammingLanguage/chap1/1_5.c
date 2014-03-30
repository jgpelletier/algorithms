#include<stdio.h>

#define LOWER    0      //These are symbolic constants
#define UPPER    300    //They are upper case
#define STEP     20     //And there are no semicolons

int main()
{
    float fahr;

    for (fahr = 300; fahr >= 0; fahr -= 20)
         printf("%6.1f %3.0f\n", fahr, (5.0/9.0)*(fahr-32));
    return 0;
}

// Notice the third argument of printf is a complex expression. It is
// permissible and accepted to use a complicated expression when the value of
// the variable is of that type.
