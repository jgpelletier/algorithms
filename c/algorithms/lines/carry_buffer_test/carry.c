#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#include <string.h>
#include "carry.h"

void print_lines (struct _line_t* lines) //definition
{
    while (lines) {
        printf(lines->line);
        lines = lines->next;
    }
}


int carry (const char* fname, struct _line_t* lines)
{
    struct _line_t *new_line, *node, *tail;
    char s;
    FILE *f;
    char buffer[25];
    char carry[10];
    size_t i, len;
    int at_eof, err, count, c, j, x;
    err = c = j = x = 0;
    memset(lines, 0, sizeof(struct _line_t));
    tail = lines->next;
    node = lines;
    if ((f = fopen (fname, "r")) != NULL) {
        count = -1;
        printf("sizeof line_t %d \n", sizeof(struct _line_t));
        do {
            count ++;
            len = fread(buffer, sizeof(char), sizeof(buffer), f);

            printf("------\n");

            new_line = malloc(sizeof(struct _line_t));

            memset(new_line, 0, sizeof(struct _line_t));

	    strcpy(new_line->line, carry);
            for (i = 0; i < len; i++) {
                s = buffer[i];
                //new_line->line[j] =  s;
                carry[x] = s;
                ++x;

                if (s == '\n') {
		    strcpy(new_line->line, carry);
		    memset(carry, 0, 10);
                    printf("Print: %d, %d, %s", i, j, new_line->line);
                    new_line->next = tail;
                    node->next = new_line;

                    new_line = malloc(sizeof(struct _line_t));
                    memset(new_line, 0, sizeof(struct _line_t));
                    node = node->next;
                    x = 0;
               }
            }

//            x = 0;
            free(new_line);

            if (len == sizeof(buffer)) {
                at_eof = 0;
            } else if (feof(f)) {
                at_eof = 1;
            } else {
                perror("fclose error");
                err = -1;
            }

        } while (at_eof == 0);
    } else {
        perror("file open  error");
        printf("errno = %d\n", errno);
        return -1;
    }

    err = fclose(f);
    if (err == EOF) {
        perror("file error");
        printf("errno = %d\n", errno);
        return -1;
    } else {
        return err;
    }
}
