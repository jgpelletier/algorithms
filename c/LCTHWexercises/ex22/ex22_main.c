#include "ex22.h"
#include "dbg.h"

// Making a const which stands for constant and is an alternative to using a
// define to create a constant variable.
const char *MY_NAME = "Zed A. Shaw";

void scope_demo(int count)
{
    log_info("count is: %d", count);

    if(count > 10) {

    // The count that is local to this block is actually different from the one in
    // the function's parameter list

    int count = 100;// BAD! BUGS!

    log_info("count in this scope is %d", count);
    }

    log_info("count is at exit: %d", count);

    // count is  in two places: the parameters to this function, and in the if-statement
    count = 3000;
    // set the parameter count to 3000 and print that out, which will demonstrate
    // that you can change function parameters and they don't impact the caller's
    // version of the variable.
    log_info("count after assign: %d", count);
}

int main(int argc, char *argv[])
{
    // test out THE_AGE accessors
    log_info("My name: %s, age: %d", MY_NAME, get_age());

    set_age(100);

    log_info("My age is now: %d", get_age());
    // test out THE_SIZE extern 
    log_info("THE_SIZE is: %d", THE_SIZE);
    print_size();

    THE_SIZE = 9;

    log_info("THE SIZE is now: %d", THE_SIZE);
    print_size();

    // test the ratio function static
    log_info("Ratio at first: %f", update_ratio(2.0));
    log_info("Ratio again: %f", update_ratio(10.0));
    log_info("Ratio once more: %f", update_ratio(300.0));

    // test the scope demo
    // notice the local count variable remains unchanged.
    int count = 4;
    scope_demo(count);
    scope_demo(count * 20);

    log_info("count after calling scope_demo: %d", count);

    return 0;
}
