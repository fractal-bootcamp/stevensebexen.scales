#include "stdio.h"
#include "math.h"

/*
Rewrite the following nested function calls as a single expression:
f(g(h(x)))

where:
f(x) = x^2
g(x) = x + 1
h(x) = 2x
*/
int f(int x) {
  return (int) pow((x * 1.0), 2.0);
}
int g(int x) {
  return (x + 1);
}
int h(int x) {
  return (2 * x);
}
int i(int x) {
  return f(g(h(x)));
}

int main() {
  int x = 5;
  int result = i(x);
  /*
  int result = f(g(h(x)));
  int result = f(g(2 * x));
  int result = f((2 * x) + 1);
  int result = ((2 * x) + 1) << 1;
  int result = ((2 * 5) + 1) << 1;
  int result = (10 + 1) << 1;
  int result = 11 << 1;
  int result = 121;
  */
  printf("%d\n", result);
}