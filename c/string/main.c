#include <stdio.h>
#include <string.h>

int main () {
  char str[100];
  char str2[50] = "A string numero 2";

  char *ptr;

  fgets(str, 100, stdin);

  ptr = strchr(str, '\n');

  // remove '\n'
  if (ptr != NULL) {
    *ptr = '\0';
  }

  printf("%d\n", (int) strlen(str));

  // print str
  puts(str);

  // print str2 with printf
  printf("%s\n", str2);

  // copy str2 to str
  strcpy(str, str2);

  puts(str);

  return 0;
}
