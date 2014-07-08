#include <stdio.h>
#include <assert.h>
#include <stdlib.h>
#include <errno.h> // defines macros to report error conditions through error codes
#include <string.h>

#define MAX_DATA 512 // Constant Expression: Integer Constant
#define MAX_ROWS 100

struct Address {// Structure declaration with the tag "address" and 4 members
    int id;
    int set;
    char name[MAX_DATA]; // fixed size
    char email[MAX_DATA];
};

struct Database {// Declaration with nested structure
    struct Address rows[MAX_ROWS];// fixed sized on rows
};

//Look more into what is happening with this section.
struct Connection {
    FILE *file;// FILE struct defined by the C standard library.
    struct Database *db; // Pointer
};

// aborts with an error.
void die(const char *message, struct Connection *conn) {
    if(errno) {// <-external variable tells what happened
        perror(message);// <-prints the error message.
    } else {
       printf("ERROR: %s\n", message);
    }

    Database_close(conn);

    exit(1); // exit: program failed.
}

void Address_print(struct Address *addr) // Function prints. It takes a struct and a pointer
{
    printf("%d %s %s\n",
            addr->id, addr->name, addr->email);
} // void functions do not return a type.

// Fread is a binary stream input. The function reads nmemb elements of
// data, each size bytes long, from the stream pointed to by stream,
// storing them at the location given by ptr.
void Database_load(struct Connection *conn)
{
    int rc = fread(conn->db, sizeof(struct Database), 1, conn->file);
    if(rc != 1) die("Failed to load database.", conn);
}

struct Connection *Database_open(const char *filename, char mode)
{
    // allocate memory for an instance.
    struct Connection *conn = malloc(sizeof(struct Connection));
    if(!conn) die("Memory error", conn);

    // pointer to member where memory is allocated.
    conn->db = malloc(sizeof(struct Database));
    if(!conn->db) die("Memory error", conn);

    // fopen is a part of FILE struct. It opens the file whose name is
    // the string pointed to by path and associates a stream with it.
    if(mode == 'c') {
        conn->file = fopen(filename, "w");// <- truncates file to 0 length or create text file
                                          //    for writing.
    } else {
        conn->file = fopen(filename, "r+");// <-open for reading and writing

       if(conn->file) {
           Database_load(conn);
       }
    }

    if(!conn->file) die("Failed to open the file", conn);

    return conn;
}

void Database_close(struct Connection *conn)
{
    if(conn) {
        if(conn->file) fclose(conn->file);// <- closes file
        if(conn->db) free(conn->db);
        free(conn);
    }
} // this releases memory

void Database_write(struct Connection *conn)
{
    // rewind is part of FILE struct
    rewind(conn->file);

    int rc = fwrite(conn->db, sizeof(struct Database), 1, conn->file);
    if(rc != 1) die("Failed to write database.", conn);

    rc = fflush(conn->file);
    if(rc == -1) die("Cannot flush database.", conn);
}

void Database_create(struct Connection *conn)
{
    int i = 0;

    for(i = 0; i < MAX_ROWS; i++) {
        // make a prototype to initialize it
        struct Address addr = {.id = i, .set = 0};
        // then just assign it
        conn->db->rows[i] = addr;
    }
}

void Database_set(struct Connection *conn, int id, const char *name, const char *email)
{
    struct Address *addr = &conn->db->rows[id];
    if(addr->set) die("Already set, delete it first", conn);

    addr->set = 1;
    // WARNING: bug, read the "How To Break It" and fix this
    // strncpy: copies the string pointed to by the src, including the
    // terminating null byte to the buffer pointed to by the dest. The strings
    // must not overlap and the destrination string must be large enought to
    // receive the copy.
    //
    // I need to allocate some memory in here and make sure each string is null
    // terminated.

    char *res = strncpy(addr->name, name, MAX_DATA);
    // demonstrate the strncpy bug
    if(!res) die("Email copy failed", conn);

    res = strncpy(addr->email, email, MAX_DATA);
    if(!res) die("Email copy failed", conn);
}

void Database_get(struct Connection *conn, int id)
{
     struct Address *addr = &conn->db->rows[id];

     if(addr->set) {
         Address_print(addr);
     } else {
        die("ID is not set", conn);
     }
}

void Database_delete(struct Connection *conn, int id)
{
    struct Address addr = {.id = id, .set = 0};
    conn->db->rows[id] = addr;
}

void Database_list(struct Connection *conn)
{
    int i = 0;
    struct Database *db = conn->db;

    for(i = 0; i < MAX_ROWS; i++) {
        struct Address *cur = &db->rows[i];

        if(cur->set) {
            Address_print(cur);
        }
    }
}

int main(int argc, char *argv[])
{
    // kills the program if arguments are less than 3
    if(argc < 3) die("USAGE: ex17 <dbfile> <action> [action params]", conn);

    char *filename = argv[1]; // points to input argument 1
    char action = argv[2][0];
    struct Connection *conn = Database_open(filename, action);
    int id = 0;
    // atoi converts the intial portion of the string pointed to by nptr to int.
    if(argc > 3) id = atoi(argv[3]);
    if(id >= MAX_ROWS) die("There's not that many records.", conn);// To much for memory

    switch(action) { // control flow - 5 choices with 9 different functions
        case 'c':
            Database_create(conn);
            Database_write(conn); // writes to the database
            break;

        case 'g':
            if(argc != 4) die("Need an id to get", conn);

            Database_get(conn, id);// gets a record
            break;

        case 's':
           if(argc != 6) die("Need id, name, email to set", conn);

           Database_set(conn, id, argv[4], argv[5]); // will need to look at the code.
           Database_write(conn);// writes to the database
           break;

        case 'd':
            if(argc != 4) die("Need id to delete", conn);

            Database_delete(conn, id);// deletes a record
            Database_write(conn);// writes to the database?
            break;

        case 'l':
            Database_list(conn);// lists the records
            break;
        default:
            die("Invalid action, only: c=create, g=get, s=set, d=del, l=list", conn);
     }

     Database_close(conn); // closes the database

     return 0;
}
