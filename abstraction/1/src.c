#include "stdio.h"

/*
Given the following functions, what is the output of c(3, 4)?
a(x) = x + 1
b(y) = y * 2
c(x, y) = a(x) + b(y)
*/
int a(int x) {
  return (x + 1);
}
int b(int y) {
  return (y * 2);
}
int c(int x, int y) {
  return (a(x) + b(y));
  /* return ((x + 1) + (y * 2)) */
}

int main() {
  int example = c(3, 4);
  /*
  int example = a(3) + b(4);
  int example = (3 + 1) + (4 * 2);
  int example = 4 + 8;
  int example = 12;
  */
  printf("%d\n", example);
}