#include <stdio.h>

int main () {
             // 0, 1, 2, 3, 4
  int arr[5] = { 1, 2, 3, 4, 5 };
  int *p = arr;
  int *q;

  q = p + 4;

  printf("%p\n", arr);
  printf("%p\n", &arr[0]);

  printf("%d\n", *(p + 1));

  printf("Sizeof char: %lu in bytes\n", sizeof(char));
  printf("Sizeof int %lu bytes\n", sizeof(int));

  printf("%d\n", *q);

  // change an item
  *(p + 3) = 10;

  printf("%d\n", arr[3]);

  return 0;
}
