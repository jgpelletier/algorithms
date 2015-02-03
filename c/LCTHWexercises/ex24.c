#include <stdio.h>
#include "dbg.h"

#define MAX_DATA 100

typedef enum EyeColor {
    BLUE_EYES, GREEN_EYES, BROWN_EYES,
    BLACK_EYES, OTHER_EYES
} EyeColor;

const char *EYE_COLOR_NAMES[] = {
    "Blue", "Green", "Brown", "Black", "Other"
};

typedef struct Person {
    int age;
    char first_name[MAX_DATA];
    char last_name[MAX_DATA];
    EyeColor eyes;
    float income;
} Person;


int main(int argc, char *argv[])
{
    Person you = {.age = 0};
    int i = 0;
    char *in = NULL;

    // Get your first name using the fgets function, which reads a string from
    // the input (in this case stdin) but makes sure it doesn't overflow the
    // given buffer.
    printf("What's your First Name? ");
    in = fgets(you.first_name, MAX_DATA-1, stdin);
    check(in != NULL, "Failed to read first name.");
    
    //Same thing for you.last_name, again using fgets.
    printf("What's your Last Name? ");
    in = fgets(you.last_name, MAX_DATA-1, stdin);
    check(in != NULL, "Failed to read last name.");

    printf("How old are you? ");

    //Uses fscanf to read an integer from stdin and put it into you.age. You can
    //see that the same format string is used as printf to print an integer. You
    //should also see that you have to give the address of you.age so that
    //fscanf has a pointer to it and can modify it. This is a good example of
    //using a pointer to a piece of data as an "out parameter".
    int rc = fscanf(stdin, "%d", &you.age);
    check(rc > 0, "You have to enter a number.");

    //Print out all the options available for eye color, with a matching number
    //that works with the EyeColor enum above.
    printf("What color are your eyes:\n");
    for(i = 0; i <= OTHER_EYES; i++) {
        printf("%d) %s\n", i+1, EYE_COLOR_NAMES[i]);
    }
    printf("> ");

    // Using fscanf again, get a number for the you.eyes, but make sure the
    // input is valid. This is important because someone can enter a value
    // outside the EYE_COLOR_NAMES array and cause a segfault.
    int eyes = -1;
    rc = fscanf(stdin, "%d", &eyes);
    check(rc > 0, "You have to enter a number.");

    you.eyes = eyes - 1;
    check(you.eyes <= OTHER_EYES && you.eyes >= 0, "Do it right, that's not an option.");
    printf("How much do you make an hour? ");
    // Get how much you make as a float for the you.income.
    rc = fscanf(stdin, "%f", &you.income);
    check(rc > 0, "Enter a floating point number.");

    printf("----- RESULTS -----\n");
    // Print everything out so you can see if you have it right. Notice that
    // EYE_COLOR_NAMES is used to print out what the EyeColor enum is actually
    // called.

    printf("First Name: %s", you.first_name);
    printf("Last Name: %s", you.last_name);
    printf("Age: %d\n", you.age);
    printf("Eyes: %s\n", EYE_COLOR_NAMES[you.eyes]);
    printf("Income: %f\n", you.income);

    return 0;
error:

    return -1;
}
