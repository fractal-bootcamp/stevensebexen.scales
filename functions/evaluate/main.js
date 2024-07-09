// Question 1 (Beginner)
function a(name) {
  return "Hello, " + name + "!";
}
console.log('Question 1:', a("Alice"));
// Output: Hello, Alice!
// Simple substitution

// Question 2 (Beginner)
function b(num) {
  return num * num;
}
console.log('Question 2:', b(5));
// Output: 25
// Squares the input

// Question 3 (Beginner)
function c(num) {
  return num % 2 === 0;
}
console.log('Question 3:', c(7));
// Output: false
// True if number is even (modulus 2)

// Question 4 (Intermediate)
function d(a, b) {
  if (b === 0) {
    return 0;
  }
  return a + d(a, b - 1);
}
console.log('Question 4:', d(3, 4));
// Output: 12
// Returns a, b times.

// Question 5 (Intermediate)
function e(n) {
  if (n === 0) {
    return 1;
  }
  return n * e(n - 1);
}
console.log("Question 5:", e(5));
// Output: 120
// Factorial: 5 * 4 * 3...

// Question 6 (Intermediate)
function f(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + f(arr.slice(1));
}
console.log("Question 6:", f([1, 2, 3, 4, 5]));
// Output: 15
// Adds current element to accumulator, then pops it. Repeat until array empty.

// Question 7 (Intermediate)
function g(n) {
  if (n <= 1) {
    return n;
  }
  return g(n - 1) + g(n - 2);
}
console.log("Question 7:", g(6));
// g(6) = g(5) + g(4) = 5 + 3 = 8
// Sub-problems
// g(5) = g(4) + g(3) = 3 + 2 = 5
// g(4) = g(3) + g(2) = 2 + 1 = 3
// g(3) = g(2) + g(1) = 1 + 1 = 2
// g(2) = g(1) + g(0) = 1 + 0 = 1
// g(1) = 1
// g(0) = 0
// Output: 8
// Fibonacci

// Question 8 (Intermediate)
function h(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return h(str.slice(1, -1));
}
console.log('Question 8', h("racecar"));
// Output: true
// Palindrome checker; compares outer two elements, then pops both ends and recurses until empty, returning false on inequality.

// Question 9 (Intermediate)
function j(num) {
  if (num < 10) {
    return num;
  }
  return (num % 10) + j(Math.floor(num / 10));
}
console.log('Question 9', j(1234));
// j(1234) = 4 + j(123) = 4 + 3 + j(12) = 4 + 3 + 2 + j(1) = 4 + 3 + 2 + 1 = 10
// Output: 10
// Sums digits by adding the rightmost to an accumulator and recursing until empty.

// Question 10 (Intermediate)
function k(a, b) {
  if (b === 0) {
    return a;
  }
  return k(b, a % b);
}
console.log('Question 10', k(48, 18));
// k(48, 18) = k(18, 12) = k(12, 6) = k(6, 0) = 6
// Output: 6
// Greatest common factor

// Question 11 (Intermediate)
function l(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (str.length === 0) {
    return 0;
  }
  return vowels.includes(str[0].toLowerCase()) ? 1 + l(str.slice(1)) : l(str.slice(1));
}
console.log('Question 11', l("JavaScript"));
// l('JavaScript') = 0 + l('avaScript') = 1 + l('vaScript')... = 3
// Counts vowels by checking leftmost element, popping it, and recursing until empty.

// Question 12 (Intermediate)
function m(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * m(base, exponent - 1);
}
console.log('Question 12', m(2, 5));
// m(2, 5) = 2 * m(2, 4) = 2 * 2 * m(2, 3)... = 2 * 2 * 2 * 2 * 2 * 1 = 32
// Exponentiation.