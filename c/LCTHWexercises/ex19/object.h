// The object.h file is declaring functions and data types that are defined
// (created) in the object.c

#ifndef _object_h // <- logic check to see there is a #define _object_h
#define _object_h // if not defined this defines it.
typedef enum {
    NORTH, SOUTH, EAST, WEST
} Direction;


// Prototype object like JavaScript. This object is used 3 times in the ex19 file. 
// The objects in that file use this object as a base and add additional elements
// to the struct. Notice the pointers to functions -- think methods.
typedef struct {
    char *description;
    int (*init)(void *self);
    void (*describe)(void *self);
    void (*destroy)(void *self);
    void *(*move)(void *self, Direction direction);
    int (*attack)(void *self, int damage);
} Object;

int Object_init(void *self);
void Object_destroy(void *self);
void Object_describe(void *self);
void *Object_move(void *self, Direction direction);
int Object_attack(void *self, int damage);
void *Object_new(size_t size, Object proto, char *description);
// ^^ Pay attention to the field associated with this function.
                                                            
#define NEW(T, N) Object_new(sizeof(T), T##Proto, N) 
// this ^^  makes a macro. works like templete. T and N inject into the line of code to the
// right in Object_new. The syntax T##Proto says to "concat Proto at the end of T", so if 
// you had NEW(Room, "Hello.") then it'd make RoomProto there.

#define _(N) proto.N
/* 
 * This ^^^ macro is a bit of "syntactic sugar" for the object system and basically helps you
 * write obj->proto.blah as simply obj->_(blah). It's not necessary, but it's a fun little
 * trick that I'll use later.
*/

#endif
