struct file_info {
    int lines;
    size_t length;
};

typedef struct file_info file_info_t;
struct file_info *file_info_create ();
struct file_info *line_count (const char* fname);
