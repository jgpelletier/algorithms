#include <stdio.h>
#include <assert.h>
#include <stdlib.h>
#include <errno.h> // defines macros to report error conditions through error codes
#include <string.h>

struct Address {// Structure declaration with the tag "address" and 4 members
    int id;
    int set;
    char *name;
    char *email;
};

struct Database {// Declaration with nested structure
    int max_data;
    int max_rows;
    struct Address *rows;
};

// pairs the file and database together
struct Connection {
    FILE *file;// FILE struct defined by the C standard library.
    struct Database *db; // Pointer
};

struct Connection *conn;

void Database_close()
{
    int i;

    if (conn) {
        for (i = 0; i < conn->db->max_rows; i++) {
            free(conn->db->rows[i].name);
            free(conn->db->rows[i].email);
        }

        if (conn->file) fclose(conn->file);// <- closes file

        if (conn->db) free(conn->db);

        free(conn);
    }
} // this releases memory

// aborts with an error.
void die(const char *message){
    if(errno) {// <-external variable tells what happened
        perror(message);// <-prints the error message.
    } else {
       printf("ERROR: %s\n", message);
    }

    Database_close();

    exit(1); // exit: program failed.
}

void Address_print(struct Address *addr) // Function prints. It takes a struct and a pointer
{
    printf("%d %s %s\n",
            addr->id, addr->name, addr->email);
}

// Fread is a binary stream input. The function reads nmemb elements of
// data, each size bytes long, from the stream pointed to by stream,
// storing them at the location given by ptr.
// this is the place where the database size must be adjusted so it may
// be arbitrarily.
void Database_load()
{
    size_t rc, wc;
    int i = 0;
    struct Address *addr;
    rc = fread(&conn->db->max_data, sizeof(int), 1, conn->file);
    wc = fread(&conn->db->max_rows, sizeof(int), 1, conn->file);

    if(rc != 1 || wc != 1) die("Failed to load database.");

    int string_size = sizeof(char) * conn->db->max_data;
    int address_size = (sizeof(int) * 2) + (string_size * 2);
    int rows_size = address_size * conn->db->max_rows;
    conn->db->rows = malloc(rows_size);

    for (i = 0; i < conn->db->max_rows; i++) {
        addr = &conn->db->rows[i];

        fread(&addr->id, sizeof(int), 1, conn->file);
        fread(&addr->set, sizeof(int), 1, conn->file);

        addr->name = malloc(string_size);
        rc =fread(addr->name, string_size, 1, conn->file);

        addr->email = malloc(string_size);
        wc = fread(addr->email, string_size, 1, conn->file);

        if(rc != 1 || wc != 1) die("Failed to load database.");
    }
}

void Database_open(const char *filename, char mode)
{
    // allocate memory for an instance.
    conn = malloc(sizeof(struct Connection)); // 8 bytes. 2 pointers

    if(!conn)
        die("Memory error");

    // pointer to member where memory is allocated.
    conn->db = malloc(sizeof(struct Database));

    if(!conn->db)
        die("Memory error");

    // fopen is a part of FILE struct. It opens the file whose name is
    // the string pointed to by path and associates a stream with it.
    // while both options below open, the 2nd arg is the mode.
    if(mode == 'c') {
        conn->file = fopen(filename, "w");// <- truncates file to 0 length or create text file
                                          //    for writing.
    } else {
        conn->file = fopen(filename, "r+");// <-open for reading and writing

       if(conn->file) {
           Database_load();
       }
    }

    if(!conn->file)
        die("Failed to open the file");
}

void Database_write()
{
    int string_size, i;
    size_t rc, wc;
    struct Address *addr;

    // rewind is part of FILE struct: sets the file position indicator for
    // the stream pointed to by stream to the beginning of the file.
    rewind(conn->file);

    // size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE*stream);
    // the function fwrite() writes nmem elements of data, each size bytes long
    // to the stream pointed to by stream, obtaining them from the location given
    // by ptr
    rc = fwrite(&conn->db->max_data, sizeof(int), 1, conn->file);
//  ^^size_t     ^^const void *ptr,   ^^size      ^^nmemb  ^^File*stream
    if (rc != 1) die("Failed to write database.");

    wc = fwrite(&conn->db->max_rows, sizeof(int), 1, conn->file);
    if (wc != 1) die("Failed to write database.");

    string_size = sizeof(char) * conn->db->max_data;

    for ( i = 0; i < conn->db->max_rows; i++ ) {
        addr = &conn->db->rows[i];
        fwrite(&addr->id, sizeof(int), 1, conn->file);
        fwrite(&addr->set, sizeof(int), 1, conn->file);
        wc = fwrite(addr->name, string_size, 1, conn->file);
        rc = fwrite(addr->email, string_size, 1, conn->file);

        if (rc != 1 || wc != 1) die("Failed to write database.");
    }
    // fflush forces a write of all user-space buffered data for the given
    // output or update stream via stream's underlying write function.
    rc = fflush(conn->file);
    if (rc == -1) die("Cannot flush database.");
}

void Database_create()
{

    int max_data = conn->db->max_data;
    int max_rows = conn->db->max_rows;

    int string_size = (sizeof(char) * max_data);
    int address_size = (sizeof(int) * 2) + (string_size * 2);
    int rows_size = address_size * max_rows;
    conn->db->rows = malloc(rows_size);

    int i = 0;
    for(i = 0; i < max_rows; i++) {
        struct Address addr = {.id = i, .set = 0};// how to declare at the beginning?
        addr.name = malloc(sizeof(char) * max_data);
        addr.email = malloc(sizeof(char) * max_rows);
        conn->db->rows[i] = addr;
    }
}

void Database_set(int id, const char *name, const char *email)
{
    int max_data = conn->db->max_data;
    struct Address *addr = &conn->db->rows[id];
    char *res;

    if(addr->set) die("Already set, delete it first");

    addr->set = 1;
    addr->name = malloc(sizeof(char)*max_data);
    addr->email = malloc(sizeof(char)*max_data);

    res = strncpy(addr->name, name, max_data);
    addr->name[max_data - 1] = '\0';

    if(!res) die("Email copy failed");

    res = strncpy(addr->email, email, max_data);
    addr->email[max_data - 1] = '\0';
    if(!res) die("Email copy failed");
}

void Database_get(int id)
{
     struct Address *addr = &conn->db->rows[id];

     if(addr->set) {
         Address_print(addr);
     } else {
        die("ID is not set");
     }
}

void Database_delete(int id)
{
    struct Address addr = {.id = id, .set = 0};
    addr.name = malloc(sizeof(char)* conn->db->max_data);
    addr.email = malloc(sizeof(char)* conn->db->max_data);
    conn->db->rows[id] = addr;
}

void Database_list()
{
    int i = 0;
    struct Database *db = conn->db;
    struct Address *cur;
    for(i = 0; i < db->max_rows; i++) {
        cur = &db->rows[i];

        if(cur->set) {
            Address_print(cur);
        }
    }
}

void Database_find(char *term)
{
    int i;
    struct Address *addr;
    for (i=0; i <conn->db->max_rows; i++) {
        addr = &conn->db->rows[i];

        if (strcmp(addr->name, term) == 0 || strcmp(addr->email, term) == 0) {

            Address_print(addr);
            return;
        }
    }
}

int main (int argc, char *argv[])
{
    if (argc < 3) die("USAGE: ex17 <dbfile> <action> [action params]");

    char *filename = argv[1]; // points to input argument 1
    char action = argv[2][0];
    Database_open(filename, action);

    int id = 0;

    if (action != 'c' && action != 'f' && argc > 3) {
    // atoi converts the intial portion of the string pointed to by nptr to int.
        id = atoi(argv[3]);

        if (id >= conn->db->max_rows)
            die("There's not that many records.");
    }

    switch (action) { // control flow - 5 choices with 9 different functions
        case 'c':
            if (argc != 5) die("MAX_DATA and MAX_ROWS needed");
            conn->db->max_data = atoi(argv[3]);
            conn->db->max_rows = atoi(argv[4]);
            Database_create();
            Database_write(); // writes to the database
            break;
        case 'g':
            if(argc != 4) die("Need an id to get");

            Database_get(id);// gets a record
            break;

        case 's':
           if(argc != 6) die("Need id, name, email to set");

           Database_set( id, argv[4], argv[5]); // will need to look at the code.
           Database_write();// writes to the database
           break;
        case 'f':
            if (argc != 4)
                die("enter a search term");
            Database_find(argv[3]);
            break;

        case 'd':
            if(argc != 4) die("Need id to delete");

            Database_delete(id);// deletes a record
            Database_write();
            break;

        case 'l':
            Database_list();// lists the records
            break;

        default:
            die("Invalid action, only: c=create, g=get, s=set, d=del, l=list");
     }

     Database_close(); // closes the database

     return 0;
}
