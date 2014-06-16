CC=gcc
CFLAGS=-Wall -g 

all: list/list parallel foo pushdown_stack Sedgewick_3_linkedlist

list/list: list/list.o list/main.o

parallel: parallel.o

foo: foo.o

pushdown_stack: pushdown_stack.o

Sedgewick_3_linkedlist: Sedgewick_3_linkedlist.o

clean:
	rm -f list/list list/*.o *.o parallel pushdown_stack Sedgewick_3_linkedlist foo 
