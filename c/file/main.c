#include <stdio.h>

int main () {
  FILE *f;

  f = fopen("./file.txt", "w+");

  if (!f) {
    printf("Error opening file");

    return 1;
  }

  fprintf(f, "This is my text %d\n", 2020);

  fclose(f);

  return 0;
}
