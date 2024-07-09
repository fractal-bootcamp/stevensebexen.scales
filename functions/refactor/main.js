// Question 1
// a: f(x) = x^2 + x^3 / x - (x+1)
// b: function A(x) = a(x) / b(x)
function a(x) {
  return x**2 + x**3;
}
function b(x) {
  return -1;  // x and -x cancel
}
function F(x) {
  return a(x) / b(x);
}
console.log('Question 1', F(5));
// (5^2 + 5^3) / (5 - (5 + 1)) = 150 / -1 = -150
// Output: -150

// Question 2
// a: g(x) = x^2 + x^3 + (x^4 -1) / x - (x+1)
// b: function G(x) = c(x) / d(x)
function c(x) {
  return x**2 + x**3 + x**4 - 1;
}
function d(x) {
  return -1;  // x and -x cancel
}
function G(x) {
  return c(x) / d(x);
}
console.log('Question 2', G(4));
// (4^2 + 4^3 + (4^4 - 1)) / (x - (x + 1))
// = (16 + 64 + 255) / (4 - 5) = 335 / -1 = -335
// Output: -335

// Question 3
// a: h(x, y) = x + y + y^2 + x^2 / y^2 - y - 1
// b: function H(x, y) = e(y) + f(x) / g(y)
function e(y) {
  return y + y**2;
}
function f(x) {
  return x + x**2;
}
function g(y) {
  return y**2 - y - 1;
}
function H(x, y) {
  return (e(y) + f(x)) / g(y);
}
console.log('Question 3', H(5, 3));
// H(5, 3) = (a(3) + b(5)) / c(3) = ((3 + 3^2) + (5 + 5^2)) / (3^2 - 3 - 1)
// = (12 + 30) / 5 = 42 / 5 = 8.4
// Output: 8.4

// Question 4
// a: j(x, y, z) = (x + x^2 + x^3) + (y + y^2 + y^3) + (z + z^2 + z^3)
// b: function J(x, y, z) = h(x) + h(y) + h(z)
function h(x) {
  return x + x**2 + x**3;
}
function J(x, y, z) {
  return h(x) + h(y) + h(z);
}
console.log('Question 4', J(3, 4, 5));
// J(3, 4, 5) = (3 + 3^2 + 3^3) + (4 + 4^2 + 4^3) + (5 + 5^2 + 5^3)
// = (3 + 9 + 27) + (4 + 16 + 64) + (5 + 25 + 125) = 39 + 84 + 155 = 278
// Output: 278