#include <stdio.h>

int main(int argc, char *argv[])
{
     // safely get the size of ages
    int *ages[] = {32, 33, 72, 3, 28}; //Number Array.
    char *names[] = {
         "Josh", "Brittany",
         "Jerome", "Katman", "Nick"
    }; // Pointer to an array. Question: How does the array names equal 40 if J only equals 5?
    char J[] = "Josh"; //Charecter array (string).

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
    int **cur_age = ages; // pointer that points at ages
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
            cur_name++, cur_age++)
    {
        printf("%s lived %d years so far.\n",
               *cur_name, *cur_age);
    }

   // printf("\n Rewrite all arrays usage so they use pointers \n")



    printf("---\n");
    printf("--- size of J %u \n", sizeof(J));
    printf("--- size of arrays:  %u age and %u name \n", sizeof(ages),sizeof(names));
    printf("--- size of array and a pointer to array: %u age and %u pointer to name \n",sizeof(ages),sizeof(*names));
    printf("--- size of pointer %u int and a pointer to pointer %u char \n", sizeof(*cur_age),sizeof(**cur_name));
    //I do not undertand the string array memory count

    return 0;
}
