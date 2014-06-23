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
    //^^^ does the error occur beause it has not been defined until line_count
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

    line_count_2("wolverineX2.txt", &info2, &error); //&info2 is being passed as a pointer to a pointer
    printf("If any value is negative then an error occured."
	   " error: %d lines: %d length: %d\n", error, info2->lines, info2->length);
 // try a different way.
    free(info2);    // <- why is this necessary?
    //free(&error);   // <- necessary? WARNING: ATTEMPT TO FREE A NON-HEAP OBJECT
}

void call_line_count_3 ()
{
    
    // moved the length, lines and error identifies to the h file.
    // the conditional jump error is gone but, now the variables do not
    // recieve there new assignments.
    int length, lines, error;
    int * ptr_lines = &lines;
    int * ptr_length = &length;
    int * ptr_err = &error;
    length = lines = error = 1;
    line_count_4("wolverineX2.txt",/*&lines*/ ptr_lines, /* &length */ ptr_length, /* &error */ ptr_err);
    printf("If any value is negative then an error occured."
           "error: %d lines: %d length: %d\n", error, lines, length);
}

/*
void call_line_count_4 ()
{

    int lines, length, error;
    lines = length = error = 0;
    struct _file_info3 * info;
    info = share_info2(lines, length);
    // assignment from incompatible pointer type given
    line_count_3 ("_x.txt", &info, &error);
    // ^^^ passing arg 2 from ^^^an incompatible pointer type
    printf("call_line_count_4: If any value is negative then an error occured. "
        "error: %d lines: %d length: %d\n", error, info->lines, info->length);
    free(info);
    //free(tmp);

}
*/

int main ()
{
    //struct _file_info3* info; // will act as temp

    call_line_count();
    call_line_count_2();
    call_line_count_3();// <- valgrind error 7 counts
   // call_line_count_4();
    return EXIT_SUCCESS;
}
