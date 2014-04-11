#include <stdio.h>

int main(int argc, char *argv[]) //Why is there argc and argv[] here?
{
     // safely get the size of ages
    int ages[] = {32, 33, 72, 3, 28}; //Number Array.
    char *names[] = {
         "Josh", "Brittany",
         "Jerome", "Katman", "Nick"
    }; //Array of Pointers to characters. This is 2 dimensional
    char J[] = "Josh"; //j is an array of characters.

    // safely get the size of ages
    int count = sizeof(ages) / sizeof(int); //Size of an Int is 4.
    int i = 0;

    // first way using indexing
    for(i = 0; i < count; i++) {
        printf("%s has %d years alive.\n",
                names[i], ages[i]); // i is a place in the array.
    }

    printf("---\n");

    // setup the pointers to the start of the arrays
    int *cur_age = ages; // pointer that points at ages. Notice its a pointer to an int
    char **cur_name = names; // pointer to the pointer that points at names.

    for(i = 0; i < count; i++) {
        printf("%s is %d years old.\n",
               *(cur_name+i), *(cur_age+i)); //pointer cur plus i moves the pointer like index.
    }

    printf("---\n");

    // third way, pointers are just arrays
    for(i = 0; i < count; i++) {
        printf("%s is %d years old again.\n",
               cur_name[i], cur_age[i]); //able to access an element of an array for both pointer and array.
    }

    printf("---\n");

    // fourth way with pointers in a stupid complex way
    for(cur_name = names, cur_age = ages;
            (cur_age - ages) < count;
            cur_name++, cur_age++) //increments pointers
    {
        printf("%s lived %d years so far.\n",
               *cur_name, *cur_age);
    }

    printf("---\n");
    printf("--- size of J %u \n", sizeof(J));
    printf("--- size of arrays:  %u age and %u name \n", sizeof(ages),sizeof(names));
    printf("--- size of array and a pointer to array: %u age and %u pointer to name \n",sizeof(ages),sizeof(*names));
    printf("--- size of pointer %u int and a pointer to pointer %u char \n", sizeof(*cur_age),sizeof(**cur_name));

    for (i = 0; i < count; i++) {
        printf("address for name %s: %p\n", cur_name[i], (cur_name+i));
        printf("address for age %d: %p\n", cur_age[i], (cur_age+i));
    }

    return 0;
}
