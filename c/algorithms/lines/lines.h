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

struct _line_t {
    char line[120];
    struct _line_t *next;
};

typedef struct _file_info info; // <-allocation of memory for the type.
typedef struct _file_info2 info2;
typedef struct _file_info3 info3;
typedef struct _line_t lines;

struct _file_info *share_info (int lines, size_t length, int error);
struct _file_info2 *share_info2 (int lines, size_t length);
struct _file_info3 share_info3 (int lines, size_t length);
struct _file_info *line_count (const char *fname);
                // ^^^ using line_count_3
void line_count_2 (const char *fname, struct _file_info2 **info2, int *error);
void line_count_4 (const char *fname, int *lines, int *length, int *error);
void line_count_3 (const char *fname, struct _file_info3 *info3, int *error);
struct _file_info3 line_count_5 (const char *fname, int *error);
                                                // ^^^ using line_count_3
int read_lines_fgets (const char *fname, struct _line_t *lines);
int read_lines (const char *fname, struct _line_t *lines);
void print_lines(struct _line_t *lines);
void delete_lines (struct _line_t *lines);
