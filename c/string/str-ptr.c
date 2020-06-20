#include <stdio.h>
#include <string.h>

int _strlen (char *s) {
  int n = 0;

  while (*s) {
    n++;
    s++;
  }

  return n;
}

int main () {
  char str[100] = "Botas";
  char *ptr;

  //   str
  //         ptr
  // | 'B' | 'o' | 't' | 'a' | '\0' |

  ptr = str;

  printf("%p\n", ptr);

  ptr++;

  printf("%p\n", ptr);

  printf("Qtd chars: %d\n", _strlen(str));

  return 0;
}
