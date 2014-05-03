#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#include <string.h>


//defines our Person struct; it has 4 members
struct Person
{
    char *name;
    int age;
    int height;
    int weight;
};

//defines a function that creates a Person
struct Person Person_create(char *name, int age, int height, int weight)
{
    //We can just declare a Person because it is on the stack
    struct Person who;
    who.name = name;
    who.age = age;
    who.height = height;
    who.weight = weight;

    return who;
}

//defines a function that uses a pointer to create a Person
struct Person *Person_P_create(char *name, int age, int height, int weight)
{
    //needs to allocate memory with malloc and use the -> to reference the
    //members.
    struct Person *who = malloc(sizeof(struct Person));
    assert(who != NULL);
    who->name = strdup(name);
    who->age = age;
    who->height = height;
    who->weight = weight;

    return who;
}

void Person_print(struct Person who)
{
    printf("Name: %s\n", who.name);
    printf("\tAge: %d\n", who.age);
    printf("\tHeight: %d\n", who.height);
    printf("\tWeight: %d\n", who.weight);
}

void Person_P_print(struct Person *who)
{
    printf("Name: %s\n", who->name);
    printf("\tAge: %d\n", who->age);
    printf("\tHeight: %d\n", who->height);
    printf("\tWeight: %d\n", who->weight);
}

int main(int argc, char *argv[])
{
    struct Person joe = Person_create(
           "Joe Alex", 32, 64, 140);

    struct Person *frank = Person_P_create(
           "Frank Blank", 20, 72, 180);

    printf("Joe is at memory location %p:\n", &joe); //needs & to show location
    Person_print(joe);

    printf("Frank is at memory location %p:\n", frank);//does not need % to show location.
    Person_P_print(frank);

    joe.age += 20;
    joe.height -= 2;
    joe.weight += 40;
    Person_print(joe);
    printf("Joe is at memory location %p:\n", &joe);

    frank->age += 20;
    frank->weight += 20;
    Person_P_print(frank);
    printf("Frank is at memory location %p:\n", frank);

    return 0;
}
