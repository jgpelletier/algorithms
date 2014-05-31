#include <stdio.h>
#include <string.h>
#include "lines.h"

int line_count (const char* fname)
{
    char buffer[1024];
    int  lines, ch;
    lines = 0;

    // open the file fname.
    FILE * f; //what type is f?
    f =  fopen (fname, "r");//REMEMBER:in c ' ' is very different than " "

    // read the file into a buffer of 1024 bytes
    fread(buffer, 1024 , 1, f);
    do {
    ch = fgetc(buffer);
    if ( ch == '\n') lines++;
    } while ( ch != EOF);
    // you will then go through the buffer counting every `\n`.
    /*for (i = 0; i < count; i++) {//for?  count not declared
        if (buffer[i] == '\n') lines++;
    }*/
    // close the file*/
    fclose(f);





    return lines; //DONT FORGET TO CHANGE THIS BACK
}
