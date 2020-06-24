#include <stdio.h>

void swap (int *a, int *b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

int main () {
  int n = 10;
  int *p;
  int a = 1;
  int b = 2;

  p = &n;

  printf("%d\n", n);

  printf("%p\n", p);
  printf("%p\n", &n);

  *p = 20;

  printf("%d\n", n);

  printf("a: %d, b: %d\n", a, b);
  
  swap(&a, &b);

  printf("a: %d, b: %d\n", a, b);

  return 0;
}
