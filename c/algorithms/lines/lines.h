struct file_info {
    int lines;
    size_t length;
};

typedef struct file_info info;
struct file_info *share_info (int lines, size_t length);
struct file_info *line_count (const char* fname);
