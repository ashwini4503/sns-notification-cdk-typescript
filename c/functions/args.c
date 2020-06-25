#include <stdio.h>
#include <stdlib.h>

int isEven(int n) {
  return n % 2 == 0;
}

int main (int argc, char **argv) {
  int a, b;

  a = atoi(argv[1]);
  b = atoi(argv[2]);

  for (int n = a; n <= b; n++) {
    if (isEven(n)) {
      printf("%d\n", n);
    }
  }

  return 0;
}
