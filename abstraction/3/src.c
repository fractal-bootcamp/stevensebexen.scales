#include "stdio.h"

struct composed {
  int (*a)(int);
  int (*b)(int);
};

int do_composed(struct composed x, int y){
  return x.a(x.b(y));
}

struct composed compose(int (*a)(int), int (*b)(int)) {
  struct composed result;
  result.a = a;
  result.b = b;
  return result;
}

int f(int x) {
  return (x + 1);
}

int g(int x) {
  return (x * 2);
}

int main() {
  struct composed h = compose(&f, &g);
  int result = do_composed(h, 3); /* Expected: 7 */
  printf("%d\n", result);
}