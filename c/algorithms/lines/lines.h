struct file_info {
    int lines;
    size_t length;
    int error;
};


struct file_info2 {
    int lines;
    size_t length;
};



typedef struct file_info info;
typedef struct file_info2 info2;
struct file_info *share_info (int lines, size_t length, int error);
struct file_info2 *share_info2 (int lines, size_t length);
struct file_info *line_count (const char* fname);
void line_count_2 (const char* fname, struct file_info2** info2, int* error);
