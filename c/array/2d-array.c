#include <stdio.h>

int main () {
  int arr[3][3];
  int i, j;
  int smallest = 9999;
  int sum = 0;

  // |x x x|
  // |x x x|
  // |x x x|

  for (i = 0; i < 3; ++i) {
    for (j = 0; j < 3; ++j) {
      scanf("%d", &arr[ i ][ j ]);

      if (arr[ i ][ j ] < smallest) {
        smallest = arr[ i ][ j ];
      }
    }
  }

  for (i = 0; i < 3; ++i) {
    for (j = 0; j < 3; ++j) {
      printf("%d ", arr[ i ][ j ]);
    }
    printf("\n");
  }

  printf("Smallest: %d\n", smallest);

  for (i = 0; i < 3; ++i) {
    sum += arr[i][i];
  }

  printf("Sum: %d\n", sum);

  return 0;
}
