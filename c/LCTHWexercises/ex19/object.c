#include <stdio.h>
#include <string.h>
#include <stdlib.h> 
#include "object.h"
#include <assert.h>

void Object_destroy(void *self)
{
    assert(self != NULL);
    Object *obj = self;

    if(obj) {
        if(obj->description) free(obj->description);
        free(obj);
    }
}

void Object_describe(void *self)
{
    assert(self != NULL);
    Object *obj = self;
    printf("%s.\n", obj->description);
}

int Object_init(void *self)
{
    assert(self != NULL);
    // do nothing
    return 1;
}

void *Object_move(void *self, Direction direction)
{
    assert(self != NULL);
    assert(&direction != NULL);
    printf("You can't go that direction.\n");
    return NULL;
}

int Object_attack(void *self, int damage)
{
    assert(self != NULL);
    assert(&damage != NULL);
    printf("You can't attack that.\n");
    return 0;
}

// uses aspect of how struct work by putting the base prototype at the
// beginning of the struct. Since C puts the fields in a struct in order,
// and since a pointer just points at a chunk of memory, It is possible 
// to "cast" a pointer to anything. In this case, even though I'm taking a
// potentially larger block of memory from calloc, I'm using a Object
// pointer to work with it.
void *Object_new(size_t size, Object proto, char *description)
{
    assert(&size != NULL);
    //assert(proto != NULL);
    assert(description != NULL);
    // setup the default function in case they are not set
    if(!proto.init) proto.init = Object_init;
    if(!proto.describe) proto.describe = Object_describe;
    if(!proto.destroy) proto.destroy = Object_destroy;
    if(!proto.attack) proto.attack = Object_attack;
    if(!proto.move) proto.move = Object_move;

    // this seems weird, but we can make a struct of one size,
    // then point a different pointer at it to "cast" it. 
    // Since C puts the Room.proto field first, that means the el pointer
    // is really only pointing at enough of the block of memory to see a 
    // full Object struct. It has no idea that it's even called proto.
    Object *el = calloc(1, size);
    assert(el != NULL);
    *el = proto;
    // ^^^ This then uses this Object *el pointer to set the contents of
    // the piece of memory correctly with *el = proto;. Remember that you
    // can copy structs, and that *el means "the value of whatever el
    // points at", so this means "assign the proto struct to whatever el points at".

    // The strdup() function allocates sufficient memory for a copy of the
    // string s1, does the copy, and returns a pointer to it.  The pointer may
    // subsequently be used as an argument to the function free(3)
    el->description = strdup(description);
    assert(el->description != NULL);
    // initialize it with whatever init we were given
    if (!el->init(el)) {
        // looks like it didn't initialize properly
        el->destroy(el);
        return NULL;
    } else {
        assert(el != NULL);
        return el;
    }
}
