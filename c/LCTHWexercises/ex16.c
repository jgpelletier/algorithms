//Research to apply:
//  - How to create a struct on the stack.
//  - How to intialize it using the member operator  "."
//  - How to pass a structure to functions w/o using a pointer


//defines 3 variable types, serveral macros and various functions for io.
#include <stdio.h>
//provides a macro which be used to verify assumptions
#include <assert.h>
//defines four variables types, several macros and various functions
#include <stdlib.h>
//defines 1 variable type, macro and various functions for manipulating arrays
//of chars.
#include <string.h>

//The keyword struct introduces a structure declaration.Person is a
//tag (notice the tag - Person - is capitolized here but not in K & R).
struct Person
{
    char *name;
    int age;
    int height;
    int weight;
};

struct Person Person_create(char *name, int age, int height, int weight)//Pointer is gone
{
    //struct Person *who = malloc(sizeof(struct Person));
    //assert(who != NULL);
    //The above is removed because the struct is stored in the stack below
    //Therefore, we do no need to allocate the memory.
    struct Person who;//<-no pointer on *who
    who.name = strdup(name); //Intialize field and strdup function duplicates string.
    who.age = age;
    who.height = height;
    who.weight = weight;

    return who;
}

//void Person_destroy(struct Person who)//<-releases memory. Memory leak occurs if not done.
//{
//    assert(who != NULL);//assert checks that malloc didn't return a null pointer
//
//    free(who.name);
//    free(who);
//}

void Person_print(struct Person who)//<-is this like a prototype
{
    printf("Name: %s\n", who.name);
    printf("\tAge: %d\n", who.age);
    printf("\tHeight: %d\n", who.height);
    printf("\tWeight: %d\n", who.weight);
}

int main(int argc, char *argv[])
{
    // make two people structures
    struct Person joe = Person_create(
           "Joe Alex", 32, 64, 140);

    struct Person frank = Person_create(
           "Frank Blank", 20, 72, 180);

    // print them out and where they are in memory
    printf("Joe is at memory location %p:\n", &joe); //%p shows struct in memory
    Person_print(joe);

    printf("Frank is at memory location %p:\n", &frank);
    Person_print(frank);

    // make everyone age 20 years and print them again
    joe.age += 20;
    joe.height -= 2;
    joe.weight += 40;
    Person_print(joe);
    printf("Joe is at memory location %p:\n", &joe); //the struct is at the same place in mem.

    frank.age += 20;
    frank.weight += 20;
    Person_print(frank);
    printf("Frank is at memory location %p:\n", &frank);

   // destroy them both so we clean up
   // Person_destroy(joe);//This function release the memory
   // Person_destroy(frank);

    return 0;
}
