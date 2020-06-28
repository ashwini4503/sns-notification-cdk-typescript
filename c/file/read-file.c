#include <stdio.h>

int main () {
  FILE *f;
  char str[100];

  f = fopen("./file.txt", "r");

  if (!f) {
    printf("Error opening file");

    return 1;
  }

  fscanf(f, "%[^\n]\n", str);

  printf("Content of file: %s\n", str);

  fclose(f);

  return 0;
}
