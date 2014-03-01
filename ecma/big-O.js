var array = new Array(113)
var num = 354
      // v-- exists! in memory somewhere, and we gotta go get get
  num = num + 1
// ^-- write it somewhere in memory
array[4] // <- O(1) pointer to start of array + (4 * size of an object reference)
array[0] // <- O(1) start of array
array[101] // <- O(1) start of array + (101 * 4 size of element of array ) = address
array[num % array.length] = num // <- O(1)
