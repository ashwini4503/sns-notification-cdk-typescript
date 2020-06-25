#include <stdio.h>

int isEven(int n) {
  return n % 2 == 0;
}

int sum(int a, int b) {
  return a + b;
}

int main () {
  int p = 10;

  printf("Is %d even? %s.\n", p, ( isEven(p) ? "yes" : "no" ) );

  printf("%d\n", sum(30, 10));

  return 0;
}
