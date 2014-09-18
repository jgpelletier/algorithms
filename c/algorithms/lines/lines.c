#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#include "lines.h"

#define BUFFER_SIZE 1024// symbolic constant
// Dynamic memory: memory is managed explicitly and flexibly
// Typically, it is taken from the heap. External fragmentation
// -- small gaps between allocated blocks --is a problem.
struct _file_info *share_info (int lines, size_t length, int error) // <-definition
{
    struct _file_info *info = malloc(sizeof(struct _file_info));
    info->lines = lines;
    info->length = length;
    info->error = error;
    return info;
}

struct _file_info2 *share_info2 (int lines, size_t length)
{
    struct _file_info2 *info2 = malloc(sizeof(struct _file_info2)); // <- not deleted
    info2->lines = lines;
    info2->length = length;
    return info2;
}

struct _file_info3 share_info3 (int lines, size_t length)
{
    struct _file_info3 info;
    info.lines = lines;
    info.length = length;
    return info;
}


struct _file_info *line_count (const char* fname)
{
    int error;
    struct _file_info3 info3;
    line_count_3(fname, &info3, &error);
    struct _file_info * info = share_info(info3.lines, info3.length, error);
    return info;
}

void line_count_2 (const char* fname, struct _file_info2 **info2, int *error)
{
    struct _file_info3 info3;
    line_count_3(fname, &info3, error);
    *info2 = share_info2(info3.lines, info3.length);
}


void line_count_3 (const char* fname, struct _file_info3* info3, int* error)
{
    char buffer[BUFFER_SIZE];
    size_t i, len;
    int at_eof, count, line_count, err;
    FILE *f;
    line_count = 0;
    err = 0;
    len = 0;

    if ((f = fopen (fname, "r")) != NULL) {
        count = -1;
        do {
            count ++;
            len = fread(buffer, sizeof(char), sizeof(buffer), f);

            for (i = 0; i < len; i++) {
                if (buffer[i] == '\n') {
                    line_count++;
                }
            }

            if (len == sizeof(buffer)) {
                at_eof = 0;
            } else if (feof(f)) {
                len = len + (count * sizeof(buffer));
                at_eof = 1;
            } else {
                perror("fclose error");
                err = -1;
            }


        } while (at_eof == 0);

        info3->length = len;
        info3->lines = line_count;

        if (fclose(f) != 0) {
            err = -1;
            perror("fclose error");
        }
    } else {
        err = -1;
        printf("fopen failed, errno = %d\n", errno);
    }
    *error = err;
}

// no line is longer than 120 characters.
// lines_t is a structure provided by the user that is the head of a linked
// list, but the user doesn't care about that.
// append to the linked list, which is not what you've been doing, you've been
// inserting at the head, you need to track and add at the tail.
// all other `line_t` are malloced.
// line_t contains a 120 character buffer.
// the buffer is ASCII and zero-terminated.
// zero is no error, non-zero is an error, return.

struct _line_t * append (struct _line_t *lines, struct _line_t *new_line)
{
    struct _line_t *node; // = malloc(sizeof(struct _line_t));
    
    node = lines;
    while (node->next != NULL) {
        node = node->next;
    }

    node->next = new_line; // <- paint can
    return lines;
}

void print_lines (struct _line_t* lines) //definition
{
    while (lines) {
        printf(lines->line);
        lines = lines->next;
    }
}

void delete_lines (struct _line_t *lines) //definition
{
    struct _line_t *node;
    lines = lines->next;
    do {
        node = lines;
        lines = lines->next;
        free(node);
    } while (lines);
}

int read_lines_fgets (const char* fname , struct _line_t *lines) // lines is the head
{
    struct _line_t *new_line, *node, *tail; // <- this is the node
    char *s;
    FILE *f;
    int  err;
    err = 0;
    tail = lines->next;
    node = lines;
    if ((f = fopen (fname, "r")) != NULL) {
	
        s = fgets(lines->line, 120, f);

        while (s != NULL) {
               new_line = malloc(sizeof(struct _line_t));
               new_line->next = NULL;
               s = fgets(new_line->line, 120, f);
               new_line->next = tail;
               node->next = new_line;
               node = node->next;
         };
    } else {
        perror("file open  error");
        printf("errno = %d\n", errno);
        return -1;
    }

    new_line = lines->next;
    //print_lines(lines);// <-conditional jump in here
    delete_lines(new_line);

    err = fclose(f);
    if (err == EOF) {
        perror("file error");
        printf("errno = %d\n", errno);
        return -1;
    } else {
        return err;
    }
}

int read_lines (const char* fname, struct _line_t* lines)
{
    struct _line_t *new_line, *node, *tail;
    char s;
    FILE *f;
    char buffer[BUFFER_SIZE];
    size_t i, len;
    int at_eof, err, count, c, j;
    err = c = j = 0;
    memset(lines, 0, (sizeof(struct _line_t))); // <- implicit declaration of function
    tail = lines->next;
    node = lines;
    if ((f = fopen (fname, "r")) != NULL) {
        count = -1;
        do {
            count ++;
            len = fread(buffer, sizeof(char), sizeof(buffer), f);

            new_line = malloc(sizeof(struct _line_t));
            new_line->next = NULL;

            for (i = 0; i < len; i++) {
                if (c == 0) {
                    lines->line[i] =  buffer[i];
                    if (buffer[i] == '\n') {
                        lines->line[i+1] = '\0';
                        c = 1;
                    }
                } else {
                    s = buffer[i];
                    new_line->line[j] =  s;
                    ++j;
                    if (s == '\n') {
                        new_line->line[j+1] = '\0';// <- bc j has not been set to zero 
						   //    it reclaims the bytes from memory.

                        new_line->next = tail;
                        node->next = new_line;//

                        new_line = malloc(sizeof(struct _line_t));
                        new_line->next = NULL;
                        node = node->next;
                        j = 0;
                    }
                }
            }

            free(new_line);// this frees the structure but does not change the memory on the stack

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

int read_lines_m (const char* fname, struct _line_t* lines)
{
    struct _line_t *new_line, *node, *tail;
    char s;
    FILE *f;
    char buffer[BUFFER_SIZE];
    char carry[120];
    size_t i, len;
    int at_eof, err, count, c, j, x;
    err = c = j = x = 0;
    memset(lines, 0, sizeof(struct _line_t)); // <- incompatible implicit declaration of memset
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

            strcpy(new_line->line, carry); // <-implicit declaration of function/incompatible implicit
            //memset(carry, 0, 120);
            for (i = 0; i < len; i++) {
                s = buffer[i];
                //new_line->line[j] =  s;
                carry[j] = s;
                ++j;

                if (s == '\n') {
                    strcpy(new_line->line, carry);
                    memset(carry, 0, 120);
                    printf("Print: %d, %d, %s", i, j, new_line->line);

                    new_line->next = tail;
                    node->next = new_line;

                    new_line = malloc(sizeof(struct _line_t));
                    memset(new_line, 0, sizeof(struct _line_t));
                    node = node->next;
                    j = 0; // <- misses reset if buffer[0]=\n
               }
            }

            j = 0;
            free(new_line);
            free(new_line); // <- throwing it away

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


// mocking vvv

int read_and_dump_all_over_the_screen_a_bunch_of_lines
    (const char* fname , struct _line_t *lines) // lines is the head
{
    struct _line_t *new_line, *node, *tail;
    char s;
    FILE *f;
    char buffer[BUFFER_SIZE];
    size_t i, len;
    int at_eof, err, count, c, j;
    err = c = j = 0;
    tail = lines->next;
    node = lines;
    if ((f = fopen (fname, "r")) != NULL) {
        count = -1;
        do {
            count ++;
            len = fread(buffer, sizeof(char), sizeof(buffer), f);

            new_line = malloc(sizeof(struct _line_t));
            new_line->next = NULL;

            /*
            while (node->next != NULL) { // <- schemiel the painter
                   node = node->next;
            }*/

            for (i = 0; i < len; i++) {
                if (c == 0) {
                    lines->line[i] =  buffer[i];
                    if (buffer[i] == '\n') {
                        lines->line[i+1] = '\0';
                        c = 1;
                    }
                } else {
                    s = buffer[i];
                    new_line->line[j] =  s;
                    ++j;
                    if (s == '\n') {
                        new_line->line[j+1] = '\0';

                        new_line->next = tail;
                        node->next = new_line;//
                        //tail = new_line->next;
                        /*
                        while (node->next != NULL) {
                           node = node->next;
                        }*/

                        new_line = malloc(sizeof(struct _line_t));
                        new_line->next = NULL;
                        node = node->next;
                        j = 0;
                    }
                }
            }

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

    new_line = lines->next;
    print_lines(lines); // <- what?
    delete_lines(new_line);

    err = fclose(f);
    if (err == EOF) {
        perror("file error");
        printf("errno = %d\n", errno);
        return -1;
    } else {
        return err;
   }
}

void line_count_4 (const char* fname, int *lines, int *length, int *error)
{
    struct _file_info3 info3;
    line_count_3(fname, &info3, error);
    *lines = info3.lines;
    *length = info3.length;
}

struct _file_info3 line_count_5 (const char* fname, int* error)
{
    struct _file_info3 info;
    line_count_3(fname, &info, error);
    return info;
}
