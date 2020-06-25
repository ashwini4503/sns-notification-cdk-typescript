#include <stdio.h>
#include <string.h>

int main () {
  char str1[20] = "Carlos Silva";
  char str2[20] = "Aline Oliveira";
  char str3[20] = "Aline Oliveira";

  printf("str1, str2: %d\n", strcmp(str1, str2));
  printf("str2, str1: %d\n", strcmp(str2, str1));
  printf("str2, str3: %d\n", strcmp(str2, str3));

  return 0;
}
