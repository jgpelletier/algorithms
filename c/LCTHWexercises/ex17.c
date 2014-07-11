#include <stdio.h>
#include <assert.h>
#include <stdlib.h>
#include <errno.h> // defines macros to report error conditions through error codes
#include <string.h>

//#define MAX_DATA 512 // Constant Expression: Integer Constant
//#define MAX_ROWS 100

struct Address {// Structure declaration with the tag "address" and 4 members
    int id;
    int set;
    char *name; //[MAX_DATA]; // fixed size
    char *email; //[MAX_DATA];
};

struct Database {// Declaration with nested structure
    int max_data;
    int max_rows;
    struct Address *rows; //[MAX_ROWS];// fixed sized on rows
};

// pairs the file and database together
struct Connection {
    FILE *file;// FILE struct defined by the C standard library.
    struct Database *db; // Pointer
};

struct Connection *conn;

void Database_close()
{
    if(conn) {
        if(conn->file) fclose(conn->file);// <- closes file
        if(conn->db) free(conn->db);
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
    int rc = 1;

    rc = fread(&conn->db->max_data, sizeof(int), 1, conn->file);
    rc = fread(&conn->db->max_rows, sizeof(int), 1, conn->file);

    if(rc != 1) die("Failed to load database.");

    int string_size = (sizeof(char) * conn->db->max_data);
    int address_size = (sizeof(int) * 2) + (string_size * 2);
    int rows_size = address_size * conn->db->max_rows;
    conn->db->rows = malloc(rows_size);

    int i = 0;
    for (i = 0; i < conn->db->max_rows; i++) {
        struct Address *addr = &conn->db->rows[i];

        fread(&addr->id, sizeof(int), 1, conn->file);
        fread(&addr->set, sizeof(int), 1, conn->file);

        addr->name = malloc(string_size);
        fread(addr->name, string_size, 1, conn->file);

        addr->email = malloc(string_size);
        fread(addr->email, string_size, 1, conn->file);


    if(rc != 1) die("Failed to load database.");

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
           Database_load();// <- need to figure out what is happening here
       }
    }

    if(!conn->file)
        die("Failed to open the file");

    //return conn;
}

void Database_write()
{
    // rewind is part of FILE struct: sets the file position indicator for
    // the stream pointed to by stream to the beginning of the file.
    rewind(conn->file);

    int rc = fwrite(conn->db, sizeof(struct Database), 1, conn->file);
    if(rc != 1) die("Failed to write database.");
    // fflush forces a write of all user-space buffered data for the given
    // output or update stream via stream's underlying write function.
    rc = fflush(conn->file);
    if(rc == -1) die("Cannot flush database.");
}


// this is where I will need to make max_size an max_data variables.
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
        struct Address addr = {.id = i, .set = 0};
        addr.name = malloc(sizeof(char) * max_data);
        addr.email = malloc(sizeof(char) * max_rows);
        conn->db->rows[i] = addr;
    }
}

void Database_set(int id, const char *name, const char *email)
{
    int max_data = conn->db->max_data;
    struct Address *addr = &conn->db->rows[id];
    if(addr->set) die("Already set, delete it first");

    addr->set = 1;
    // WARNING: bug, read the "How To Break It" and fix this
    // strncpy: copies the string pointed to by the src, including the
    // terminating null byte to the buffer pointed to by the dest. The strings
    // must not overlap and the destrination string must be large enought to
    // receive the copy.
    //
    // I need to allocate some memory in here and make sure each string is null
    // terminated.

    char *res = strncpy(addr->name, name, max_data);
    // demonstrate the strncpy bug
    if(!res) die("Email copy failed");

    res = strncpy(addr->email, email, max_data);
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
    conn->db->rows[id] = addr;
}

void Database_list()
{
    int i = 0;
    struct Database *db = conn->db;

    for(i = 0; i < db->max_rows; i++) {
        struct Address *cur = &db->rows[i];

        if(cur->set) {
            Address_print(cur);
        }
    }
}

int main(int argc, char *argv[])
{
    // kills the program if arguments are less than 3
    if(argc < 3) die("USAGE: ex17 <dbfile> <action> [action params]");

    char *filename = argv[1]; // points to input argument 1
    char action = argv[2][0];
    Database_open(filename, action);
    int id = 0;

    if (action != 'c' && argc > 3) {
    // atoi converts the intial portion of the string pointed to by nptr to int.
        id = atoi(argv[3]);
    }
    if(id >= conn->db->max_rows) die("There's not that many records.");// To much for memory

    switch(action) { // control flow - 5 choices with 9 different functions
        case 'c':
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

        case 'd':
            if(argc != 4) die("Need id to delete");

            Database_delete(id);// deletes a record
            Database_write();// writes to the database?
            break;

        case 'l':
            Database_list();// lists the records
            break;
        default:
            die("Invalid action, only: c=create, g=get, s=set, d=del, l=list");
     }

     Database_close(conn); // closes the database

     return 0;
}
