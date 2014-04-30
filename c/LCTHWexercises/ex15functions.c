#include <stdio.h>

void print_pointers1(int count, int *cur_age, char **cur_name)
{
    int i;
    for (i = 0; i < count; i++) {
     printf("%s is %d years old.\n", *(cur_name+i), *(cur_age+i));
     }
}

void print_pointers2(int count, int *cur_age, char **cur_name)
{
    int i;
    for (i = count-1; i >= 0; i--) {
    printf("%s is %d years old again.\n", cur_name[i], cur_age[i]);
    }
}


void print_pointers3(int count, int *cur_age, char **cur_name, int ages[], char *names[])
{
    for (cur_name = names, cur_age = ages; (cur_age - ages) < count; cur_name++, cur_age++) {
    printf("%s lived %d years so far.\n", *cur_name, *cur_age);
    }
}

int main(int argc, char *argv[])
{
    int ages[] = {32, 33, 72, 3, 28};
    char *names[] = {
    "Josh", "Brittany", "Jerome", "Katman", "Nick"
    };

    int count = sizeof(ages) / sizeof(int);
    int i = 0;

    for (i = 0; i < count; i++) {
    printf("%s has %d years alive.\n", names[i], ages[i]);
    }

    puts("-----");
    int *cur_age = ages;
    char **cur_name = names;

    print_pointers1(count, cur_age, cur_name);
    puts("-----");

    print_pointers2(count, cur_age, cur_name);
    puts("-----");

    print_pointers3(count, cur_age, cur_name, ages, names);
    puts("-----");

    cur_age = ages;
    cur_name = names;
    for (i = 0; i < count; i++) {
    printf("address for name %s: %p\n", cur_name[i], (cur_name+i));
    printf("address for age %d: %p\n", cur_age[i], (cur_age+i));
    }

    return 0;
}
