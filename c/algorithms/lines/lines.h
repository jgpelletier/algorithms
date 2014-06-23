// nameing external breaks the program. using storage class static at this level
// does nothing
/*extern*/ /*static*/ int error, length, lines;

/*int* ptr_err;
int* ptr_length;
int* ptr_lines;
*/
struct _file_info { // <-declaration
    int lines;
    size_t length;
    int error;
};


struct _file_info2 {
    int lines;
    size_t length;
};

struct _file_info3 { // <- 8 bytes
    int lines;
    size_t length;
};

typedef struct _file_info info; // <-allocation of memory for the type.
typedef struct _file_info2 info2;
typedef struct _file_info3 info3;
struct _file_info *share_info (int lines, size_t length, int error);
struct _file_info2 *share_info2 (int lines, size_t length);
struct _file_info *line_count (const char* fname);
void line_count_2 (const char* fname, struct _file_info2** info2, int* error);
//^^^ function passes pointer to pointer allowing the argument pointer to be
//    re-assigned to a different location in memory
void line_count_4 (const char* fname, int *lines, int *length, int *error);
//^^^ function passes pointers to the variables.
void line_count_3 (const char* fname, struct _file_info3* info3, int* error);
                                          // ^^^ tried this?
                                          // look at page 215 of reese's book
