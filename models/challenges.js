const challenges = [
  {
    id: 0,
    title: "Add two numbers",
    description: [
      "You are given two integer numbers, a and b",
      "You need to add them and return the sum.",
    ],
    notes: [
      "Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?",
    ],
    examples: [
      {
        id: 0,
        input: "a=1 b=2",
        output: "3",
      },
      {
        id: 1,
        input: "a=5 b=5",
        output: "10",
      },
      {
        id: 2,
        input: "a=10 b=20",
        output: "30",
      },
    ],
    codeStart: ["function addTwoNumbers(a, b) {", "let result = 0;"],
    codeEnd: ["return result", "}"],
    testFunction: [
      "function test(result, expected) {",
      "return result === expected;",
      "}",
    ],
    testcase: [
      {
        id: 0,
        input: "const result = addTwoNumbers(1, 2);",
        output: "console.log(test(result, 3));",
      },
      {
        id: 1,
        input: "const result = addTwoNumbers(5, 5);",
        output: "console.log(test(result, 10));",
      },
      {
        id: 2,
        input: "const result = addTwoNumbers(10, 20);",
        output: "console.log(test(result, 30));",
      },
      {
        id: 3,
        input: "const result = addTwoNumbers(100, 200);",
        output: "console.log(test(result, 300));",
      },
      {
        id: 4,
        input: "const result = addTwoNumbers(1000, 2000);",
        output: "console.log(test(result, 3000));",
      },
    ],
    answer: "",
    tested: false,
  },
  {
    id: 1,
    title: "Find the largest number",
    description: [
      "You are given an array of integers.",
      "You need to find the largest number in the array and return it.",
    ],
    notes: [
      "Follow-up: Can you come up with an algorithm that is less than O(n) time complexity?",
    ],
    examples: [
      {
        id: 0,
        input: "[1, 2, 3, 4, 5]",
        output: "5",
      },
      {
        id: 1,
        input: "[-1, -2, -3, -4, -5]",
        output: "-1",
      },
      {
        id: 2,
        input: "[10, 20, 30, 40, 50]",
        output: "50",
      },
    ],
    codeStart: ["function findLargestNumber(arr) {", "let largest = arr[0];"],
    codeEnd: ["return largest;", "}"],
    testFunction: [
      "function test(result, expected) {",
      "return result === expected;",
      "}",
    ],
    testcase: [
      {
        id: 0,
        input: "const result = findLargestNumber([1, 2, 3, 4, 5]);",
        output: "console.log(test(result, 5));",
      },
      {
        id: 1,
        input: "const result = findLargestNumber([-1, -2, -3, -4, -5]);",
        output: "console.log(test(result, -1));",
      },
      {
        id: 2,
        input: "const result = findLargestNumber([10, 20, 30, 40, 50]);",
        output: "console.log(test(result, 50));",
      },
      {
        id: 3,
        input: "const result = findLargestNumber([0, 0, 0, 0, 0]);",
        output: "console.log(test(result, 0));",
      },
      {
        id: 4,
        input: "const result = findLargestNumber([-100, 0, 100]);",
        output: "console.log(test(result, 100));",
      },
    ],
    answer: "",
    tested: false,
  },
  {
    id: 2,
    title: "Reverse a String",
    description: [
      "You are given a string s.",
      "You need to reverse the string and return the reversed string.",
    ],
    notes: [],
    examples: [
      {
        id: 0,
        input: "s='hello'",
        output: "'olleh'",
      },
      {
        id: 1,
        input: "s='world'",
        output: "'dlrow'",
      },
      {
        id: 2,
        input: "s='abcd'",
        output: "'dcba'",
      },
    ],
    codeStart: ["function reverseString(s) {", "let reversed = '';"],
    codeEnd: ["return reversed;", "}"],
    testFunction: [
      "function test(result, expected) {",
      "return result === expected;",
      "}",
    ],
    testcase: [
      {
        id: 0,
        input: "const result = reverseString('hello');",
        output: "console.log(test(result, 'olleh'));",
      },
      {
        id: 1,
        input: "const result = reverseString('world');",
        output: "console.log(test(result, 'dlrow'));",
      },
      {
        id: 2,
        input: "const result = reverseString('abcd');",
        output: "console.log(test(result, 'dcba'));",
      },
      {
        id: 3,
        input: "const result = reverseString('12345');",
        output: "console.log(test(result, '54321'));",
      },
      {
        id: 4,
        input: "const result = reverseString('!@#$%');",
        output: "console.log(test(result, '%$#@!'));",
      },
    ],
    answer: "",
    tested: false,
  },
  {
    id: 3,
    title: "Calculate Factorial",
    description: [
      "You are given a non-negative integer n.",
      "You need to calculate the factorial of n and return the result.",
    ],
    notes: [],
    examples: [
      {
        id: 0,
        input: "n=5",
        output: "120",
      },
      {
        id: 1,
        input: "n=3",
        output: "6",
      },
      {
        id: 2,
        input: "n=0",
        output: "1",
      },
    ],
    codeStart: ["function factorial(n) {", "let result = 1;"],
    codeEnd: ["return result;", "}"],
    testFunction: [
      "function test(result, expected) {",
      "return result === expected;",
      "}",
    ],
    testcase: [
      {
        id: 0,
        input: "const result = factorial(5);",
        output: "console.log(test(result, 120));",
      },
      {
        id: 1,
        input: "const result = factorial(3);",
        output: "console.log(test(result, 6));",
      },
      {
        id: 2,
        input: "const result = factorial(0);",
        output: "console.log(test(result, 1));",
      },
      {
        id: 3,
        input: "const result = factorial(1);",
        output: "console.log(test(result, 1));",
      },
      {
        id: 4,
        input: "const result = factorial(10);",
        output: "console.log(test(result, 3628800));",
      },
    ],
    answer: "",
    tested: false,
  },
  {
    id: 4,
    title: "Count Vowels",
    description: [
      "You are given a string s.",
      "You need to count the number of vowels (a, e, i, o, u) in the string and return the count.",
    ],
    notes: [],
    examples: [
      {
        id: 0,
        input: "s='hello'",
        output: "2",
      },
      {
        id: 1,
        input: "s='world'",
        output: "1",
      },
      {
        id: 2,
        input: "s='aeiou'",
        output: "5",
      },
    ],
    codeStart: ["function countVowels(s) {", "let count = 0;"],
    codeEnd: ["return count;", "}"],
    testFunction: [
      "function test(result, expected) {",
      "return result === expected;",
      "}",
    ],
    testcase: [
      {
        id: 0,
        input: "const result = countVowels('hello');",
        output: "console.log(test(result, 2));",
      },
      {
        id: 1,
        input: "const result = countVowels('world');",
        output: "console.log(test(result, 1));",
      },
      {
        id: 2,
        input: "const result = countVowels('aeiou');",
        output: "console.log(test(result, 5));",
      },
      {
        id: 3,
        input: "const result = countVowels('abcdefghijklmnopqrstuvwxyz');",
        output: "console.log(test(result, 5));",
      },
      {
        id: 4,
        input: "const result = countVowels('This is a test');",
        output: "console.log(test(result, 4));",
      },
    ],
    answer: "",
    tested: false,
  },
  {
    id: 5,
    title: "Check Palindrome",
    description: [
      "You are given a string s.",
      "You need to determine if the string is a palindrome (reads the same forwards and backwards) and return true if it is, otherwise return false.",
    ],
    notes: [],
    examples: [
      {
        id: 0,
        input: "s='racecar'",
        output: "true",
      },
      {
        id: 1,
        input: "s='hello'",
        output: "false",
      },
      {
        id: 2,
        input: "s='madam'",
        output: "true",
      },
    ],
    codeStart: ["function isPalindrome(s) {", "let reversed = '';"],
    codeEnd: ["return s === reversed;", "}"],
    testFunction: [
      "function test(result, expected) {",
      "return result ===         expected;",
      "}",
    ],
    testcase: [
      {
        id: 0,
        input: "const result = isPalindrome('racecar');",
        output: "console.log(test(result, true));",
      },
      {
        id: 1,
        input: "const result = isPalindrome('hello');",
        output: "console.log(test(result, false));",
      },
      {
        id: 2,
        input: "const result = isPalindrome('madam');",
        output: "console.log(test(result, true));",
      },
      {
        id: 3,
        input: "const result = isPalindrome('abcdcba');",
        output: "console.log(test(result, true));",
      },
      {
        id: 4,
        input: "const result = isPalindrome('abcde');",
        output: "console.log(test(result, false));",
      },
    ],
    answer: "",
    tested: false,
  },
  {
    id: 7,
    title: "FizzBuzz",
    description: [
      "You are given an integer n.",
      "Write a function that prints the numbers from 1 to n. But for multiples of 3, print 'Fizz' instead of the number, and for the multiples of 5, print 'Buzz'. For numbers which are multiples of both 3 and 5, print 'FizzBuzz'.",
    ],
    notes: [],
    examples: [
      {
        id: 0,
        input: "n=5",
        output: "1, 2, Fizz, 4, Buzz",
      },
      {
        id: 1,
        input: "n=15",
        output:
          "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz",
      },
      {
        id: 2,
        input: "n=10",
        output: "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz",
      },
    ],
    codeStart: ["function fizzBuzz(n) {", "let output = '';"],
    codeEnd: ["return output;", "}"],
    testFunction: [
      "function test(result, expected) {",
      "return result === expected;",
      "}",
    ],
    testcase: [
      {
        id: 0,
        input: "const result = fizzBuzz(5);",
        output: "console.log(test(result, '1, 2, Fizz, 4, Buzz'));",
      },
      {
        id: 1,
        input: "const result = fizzBuzz(15);",
        output:
          "console.log(test(result, '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz'));",
      },
      {
        id: 2,
        input: "const result = fizzBuzz(10);",
        output:
          "console.log(test(result, '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz'));",
      },
      {
        id: 3,
        input: "const result = fizzBuzz(1);",
        output: "console.log(test(result, '1'));",
      },
      {
        id: 4,
        input: "const result = fizzBuzz(3);",
        output: "console.log(test(result, '1, 2, Fizz'));",
      },
    ],
    answer: "",
    tested: false,
  },
];

module.exports = challenges;
