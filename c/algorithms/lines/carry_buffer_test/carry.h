struct _line_t {
    char line[10];
    struct _line_t*  next;
};


typedef struct _line_t lines;

void print_lines (struct _line_t *lines); //definition

int carry(const char *fname, struct _line_t *lines);
