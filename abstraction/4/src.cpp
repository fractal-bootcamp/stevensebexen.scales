#include <cmath>
#include <functional>
#include <iostream>

std::function<int(int)> compose(std::function<int(int)> f, std::function<int(int)> g) {
  std::function<int(int)> result = [f, g](int x)->int {
    return f(g(x));
  };
  return result;
}

int main() {
  auto triple = [](int x)->int {return x * 3;};
  auto add_five = [](int x)->int {return x + 5;};
  auto square = [](int x)->int {return pow(x, 2);};

  auto result = compose(square, compose(add_five, triple));

  int example = result(2);  // Expected: 121
  std::cout << example << std::endl;
}