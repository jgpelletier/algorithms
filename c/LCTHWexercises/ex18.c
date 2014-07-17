#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#include <string.h>

/** our old friend die from ex17. */
void die(const char *message)
{
	if(errno) {
		perror(message);
	} else {
		printf("ERROR: %s\n", message);
	}
	
	exit(1);
}

// a typedef creates a fake type, in this
// case for a function pointer
typedef int (*compare_cb)(int a, int b);

/**
 * A classic bubble sort function that uses the
 * compare_cb to do the sorting.
 */
int *bubble_sort(int *numbers, int count, compare_cb cmp)
// ^^This is where the typedef compare_is used ^^^
//   as the last parameter.
{
    int temp = 0;
    int i = 0;
    int j = 0;
    int *target = malloc(count * sizeof(int));

    if(!target) die("Memory error.");

    memcpy(target, numbers, count * sizeof(int));
    //      ^^*dest   ^^*src     ^^n
    // this function copies n bytes from memory area src to memory
    // are dest.
    //
    // ^^ the lines above create variables on the stack as well as
    //    an array of integers from the heap using malloc.
    //    EXPLAIN count*sizeof(int)

    for(i = 0; i < count; i++) {
      //^^ outer loop of bubble sort
        for(j = 0; j < count - 1; j++) {
        // ^^inner loop of bubble sort
            if(cmp(target[j], target[j+1]) > 0) {
            // ^^^the cmp callback is called like a normal
            //    function, but instead of being the name
            //    of something defined, its just a pointer
            //    to a function. As long as the arguments
            //    match the signiture of compare_cb typedef
            //    they may be past into it.
                temp = target[j+1];
                target[j+1] = target[j];
                target[j] = temp;
                // ^^^ the 3 lines above are the swapping operation
            }
        }
    }

    return target;
    // ^^^return the newly created and sorted array result.
}

// Below are three different versions of the compare_cb
// function, which needs to have the same definition as
// the typedef we created. If they do not match the typedef
// the C compiler will show an error.
int sorted_order(int a, int b)
{
    return a - b;
}

int reverse_order(int a, int b)
{
    return b - a;
}

int strange_order(int a, int b)
{
    if(a == 0 || b == 0) {
        return 0;
    } else {
        return a % b;
    }
}

/**
 * Used to test that we are sorting things correctly
 * by doing the sort and printing it out.
 */
void test_sorting(int *numbers, int count, compare_cb cmp)
// this is a tester for the bubble_sort function. Notice how
// functions are passed around like any other pointer.
{
    int i = 0;
    int *sorted = bubble_sort(numbers, count, cmp);

    if(!sorted) die("Failed to sort as requested.");

    for(i = 0; i < count; i++) {
        printf("%d ", sorted[i]);
    }
    printf("\n");

    free(sorted);

    unsigned char *data = (unsigned char *)cmp;

    for(i = 0; i < 25; i++) {
        printf("%02x:", data[i]);
        }

    printf("\n");
}


int main(int argc, char *argv[])
// A simple main function that sets up an array based on
// integers you pass on the command line. It then calls
// test_sorting.
{
    if(argc < 2) die("USAGE: ex18 4 3 1 5 6");

    int count = argc - 1;
    int i = 0;
    char **inputs = argv + 1;

    int *numbers = malloc(count * sizeof(int));
    if(!numbers) die("Memory error.");

    for(i = 0; i < count; i++) {
        numbers[i] = atoi(inputs[i]);
    }

    // example of typedef usage in 3rd argument of test_sorting
    // function below.
    test_sorting(numbers, count, sorted_order);
    test_sorting(numbers, count, reverse_order);
    test_sorting(numbers, count, strange_order);

    free(numbers); // free up array of numbers

    return 0;
}
