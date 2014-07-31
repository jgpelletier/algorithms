#include <stdio.h>
#include <stdlib.h>
#include "lines.h"

void call_line_count ()
{
    struct _file_info *info;// declared memory
    info = line_count("wolverineX2.txt"); // <- this DOES NOT change
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

void call_read_lines_fgets ()
{
    struct _line_t lines;
    lines.next= NULL;
    read_lines_fgets ("wolverineX2.txt", &lines);
}

void call_read_lines ()
{
    struct _line_t lines;
    lines.next = NULL; // -> initialize in `read_lines`.
    read_lines("wolverineX2.txt", &lines);
    print_lines(&lines);
    delete_lines (lines.next);
    // -> here you can print
    // -> deallocation is part of the API.
}



int main ()
{
    /*call_line_count();
    call_line_count_2();
    call_line_count_3();
    call_line_count_4();*/
    call_read_lines();
   // call_read_lines_fgets();
    return EXIT_SUCCESS;
}
