#include <stdio.h>

int main () {
  int numbers[5]; // 0, 1, ... n - 1
  int i;
  int greatest = -100;
  int sum = 0;

  for (i = 0; i < 5; ++i) {
    scanf("%d", &numbers[i]);

    sum += numbers[i];

    if (numbers[i] > greatest) {
      greatest = numbers[i];
    }
  }

  for (i = 0; i < 5; ++i) {
    printf("%d\n", numbers[i]);
  }

  printf("Greatest: %d, sum %d\n", greatest, sum);

  return 0;
}
