#include <stdio.h>
#include <assert.h>
#include <stdlib.h>
#include <errno.h> //defines macros to report error conditions through error codes
#include <string.h>

#define MAX_DATA 512 //Constant Expression: Integer Constant
#define MAX_ROWS 100 //Constant Expression: Integer Constant

struct Address {//Structure declaration with the tag "address" and 4 members
    int id;
    int set;
    char name[MAX_DATA]; //fixed size
    char email[MAX_DATA];
};

struct Database {//Declaration with nested structure
    struct Address rows[MAX_ROWS];//fixed sized on rows
};

//Look more into what is happening with this section.
//     - There is a nested struct.
//     - There is a pointer to the location of the database
//     - What is happening with FILE *file. There is a pointer.
struct Connection {
    FILE *file;// FILE struct defined by the C standard library.
    struct Database *db; //Pointer
};

// aborts with an error.
void die(const char *message){
    if(errno) {//<-external variable tells what happened
        perror(message);//<-prints the error message.
    } else {
       printf("ERROR: %s\n", message);
    }

    exit(1); //exit: program failed.
}

void Address_print(struct Address *addr) //Function prints. It takes a struct and a pointer
{
    printf("%d %s %s\n",
            addr->id, addr->name, addr->email);
} //why no return

//What is happening with Fread? There is a need to know the sizeof the database
//Ther is a pointer to the struct connection with the variable conn.
//The conn variable has a member named file.
void Database_load(struct Connection *conn)
{
    int rc = fread(conn->db, sizeof(struct Database), 1, conn->file);
    if(rc != 1) die("Failed to load database.");
} //why no return

//Is this the function that intializes the structure?
//
struct Connection *Database_open(const char *filename, char mode)
{
    //allocate memory for an instance.
    struct Connection *conn = malloc(sizeof(struct Connection));
    if(!conn) die("Memory error");

    //pointer to member where memory is allocated.
    conn->db = malloc(sizeof(struct Database));
    if(!conn->db) die("Memory error");

    //fopen is a part of FILE struct
    if(mode == 'c') {
        conn->file = fopen(filename, "w");
    } else {
        conn->file = fopen(filename, "r+");

       if(conn->file) {
           Database_load(conn);
       }
    }

    if(!conn->file) die("Failed to open the file");

    return conn;
}

void Database_close(struct Connection *conn)
{
    if(conn) {
        if(conn->file) fclose(conn->file);
        if(conn->db) free(conn->db);
        free(conn);
    }
} //this releases memory

void Database_write(struct Connection *conn)
{
    //rewind is part of FILE struct
    rewind(conn->file);

    int rc = fwrite(conn->db, sizeof(struct Database), 1, conn->file);
    if(rc != 1) die("Failed to write database.");

    rc = fflush(conn->file);
    if(rc == -1) die("Cannot flush database.");
} //again no return

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
    if(addr->set) die("Already set, delete it first");

    addr->set = 1;
    // WARNING: bug, read the "How To Break It" and fix this
    char *res = strncpy(addr->name, name, MAX_DATA);
    // demonstrate the strncpy bug
    if(!res) die("Email copy failed");

    res = strncpy(addr->email, email, MAX_DATA);
    if(!res) die("Email copy failed");
}

void Database_get(struct Connection *conn, int id)
{
     struct Address *addr = &conn->db->rows[id];

     if(addr->set) {
         Address_print(addr);
     } else {
        die("ID is not set");
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
    if(argc < 3) die("USAGE: ex17 <dbfile> <action> [action params]");

    char *filename = argv[1]; //points to the first argv
    char action = argv[2][0]; //multi-dimensional array
    struct Connection *conn = Database_open(filename, action);
    int id = 0;

    if(argc > 3) id = atoi(argv[3]);
    if(id >= MAX_ROWS) die("There's not that many records.");

    switch(action) { //control flow
        case 'c':
            Database_create(conn);
            Database_write(conn);
            break;

        case 'g':
            if(argc != 4) die("Need an id to get");

            Database_get(conn, id);
            break;

        case 's':
           if(argc != 6) die("Need id, name, email to set");

           Database_set(conn, id, argv[4], argv[5]); //how many arguments are there?
           Database_write(conn);
           break;

        case 'd':
            if(argc != 4) die("Need id to delete");

            Database_delete(conn, id);
            Database_write(conn);
            break;

        case 'l':
            Database_list(conn);
            break;
        default:
            die("Invalid action, only: c=create, g=get, s=set, d=del, l=list");
     }

     Database_close(conn);

     return 0;
}
