#include <stdio.h>

void swap1(int *px, int *py)
{
    int temp;

    temp = *px;
    *px = *py;
    *py = temp;
}

int main()
{
    printf("Please enter the value for x and y\n");
    scanf("%d%d, &
