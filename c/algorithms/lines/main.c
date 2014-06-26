#include <stdio.h>
#include <stdlib.h>
#include "lines.h"

void call_line_count ()
{
    struct _file_info *info;// declared memory
    info = line_count("wolverineX2.txt");
    printf("If any value is negative then an error occured. "
        "error: %d lines: %d length: %d\n", info->error, info->lines, info->length);
    free(info);
}

void call_line_count_2 ()
{
    int error = 0;
    struct _file_info2* info2;
    line_count_2("wolverineX2.txt", &info2, &error);
    printf("If any value is negative then an error occured."
	   " error: %d lines: %d length: %d\n", error, info2->lines, info2->length);
    free(info2);
}

void call_line_count_3 ()
{
    int length, lines, error;
    int * ptr_lines = &lines;
    int * ptr_length = &length;
    int * ptr_err = &error;
    line_count_4("wolverineX2.txt",/*&lines*/ ptr_lines, /* &length */ ptr_length, /* &error */ ptr_err);
    printf("If any value is negative then an error occured."
           " error: %d lines: %d length: %d\n", error, lines, length);
}

// was struct _file_info2 * foo chosen specifically
struct _file_info3 foo ()
{
    int error;
    struct _file_info3 info; //struct _file_info2 foo1?
    line_count_5("wolverineX2.txt", &error);
    //struct _file_info2 foo_1;  // <- until you call another function
    printf("in foo. lines: %d length:%d\n", info.lines, info.length);
    return info; //this returned &foo_1
}

void call_line_count_4 ()
{
    int error; //lines, length, error;
    struct _file_info3 info;
    // ^^^ type followed by the name.

    // lines = length = error = 0;// Un-needed but removes warning
    // info = share_info3(lines, length); // <- what is this? pass by value
        // ^^^ what does this do? nothin' useful
    line_count_3 ("wolverineX2.txt", &info, &error);
    printf("If any value is negative then an error occured. "
        "error: %d lines: %d length: %d\n", error, info.lines, info.length);
    // <- gone here
}


int main ()
{

    struct _file_info3 info;// unused
    call_line_count();
    call_line_count_2();
    call_line_count_3();
    call_line_count_4();
    foo();
    printf("in main. lines: %d\n", info.lines);
    return EXIT_SUCCESS;
}
