#include <stdio.h>
#include <stdlib.h>
#include "lines.h"

void call_line_count ()
{
    //int lines, length, error;
    //lines = length = error = 0;
    struct _file_info /**tmp,*/ *info;// declared memory
    //tmp = share_info(lines, length, error);
    //info = tmp;
    info = line_count("wolverineX2.txt"); // <- 1st valgrind error here by lines.c 130
    //^^^ does the error occur because it has not been defined until line_count
    //    has finished running? mallocing memory into tmp does nothing but use
    //    more memory
    printf("If any value is negative then an error occured. "
        "error: %d lines: %d length: %d\n", info->error, info->lines, info->length);
    free(info);
    //free(tmp);
}

void call_line_count_2 ()
{
    int error = 0;
    struct _file_info2* info2;
        // ^^^ raw material for 12 different API calls.
        //          words, words, words

    line_count_2("_x.txt", &info2, &error); //&info2 is being passed as a pointer to a pointer
    printf("If any value is negative then an error occured. error: %d lines: %d length: %d\n", error, info2->lines, info2->length);
 // try a different way.
    free(info2);    // <- why is this necessary?
    //free(&error);   // <- necessary? WARNING: ATTEMPT TO FREE A NON-HEAP OBJECT
}

void call_line_count_3 ()
{ // <- uninitialised value was created by a stack allocation here. This error shows up in 7 contexts.
    // allocate both the pointer and pointee
    // I get an error, but the correct values with the pointers 
    /*static*/ int error, length, lines; // <- with static all variables are 0
    int* ptr_err = &error;
    int* ptr_length = &length;
    int* ptr_lines = &lines;
    //error = -1;// how come this does not change when passes
    //printf("error %d\n", error);//<- why is this 1. it is not assigned. 2nd valgrind error, caused at _itoa_word and  libc
    // no dynamic allocation
    line_count_4("_x.txt", /*&lines*/ ptr_lines, /*&length*/ ptr_length, /*&error*/ ptr_err);
    //printf("If any value is negative then an error occured."
    //        "error: %d lines: %d length: %d\n", error, lines, length);
    // ^^^printf has its own stackframe. There 7 valgrind contexts for errors here. If
    //    printf is removed the errors are removed.
}

/*
void call_line_count_4 ()
{

    struct _file_info3* info; // will act as temp
    line_count_3 (const char* fname, struct _file_info3* info3, int* error);

}
*/


int main ()
{
    //struct _file_info3* info; // will act as temp

    call_line_count();// <- 1st valgrind error caused by lines.c 130
    call_line_count_2();
    call_line_count_3();// <- valgrind error 7 counts
   // call_line_count_4();
    return EXIT_SUCCESS;
}
