#include <stdio.h>
#include <stdlib.h>

int main () {
  int *arr;
  int n;

  printf("Type array size: ");
  scanf("%d", &n);

  // malloc -> memory allocation
  arr = (int *) malloc(n * sizeof(int));

  if (!arr) {
    printf("Not possible to create memory for this array\n");
    return 1;
  }

  for (int i = 0; i < n; i++) {
    arr[i] = i + 1;
  }

  for (int i = 0; i < n; i++) {
    printf("%d\n", arr[i]);
  }

  free(arr);

  return 0;
}
