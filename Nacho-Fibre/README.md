
# Nacho Fibre

## Setup

* Fork the repo
* Clone the repo

## Description

You have two problems below. You should write psuedocode and code for each solution. Test cases are included to ensure proper functionality. You can run `npm test` in the terminal to run the test suite.

## Problem 1: The Fibonacci Sequence

The Fibonacci sequence appears in nature all around us, in the arrangement of seeds in a sunflower and the spiral of a nautilus for example.

The Fibonacci sequence begins with *fibonacci(0) = 0* and *fibonacci(1) = 1* as its first and second terms. After these first two elements, each subsequent element is equal to the sum of the previous two elements.

Programmatically:

* *fibonacci(0) = 0*
* *fibonacci(1) = 1*
* *fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)*

Given *n*, return the *nth* number in the sequence.

---

### Example

Input: 6

Output: 8

Explanation: The first 6 numbers (starting at index 0) in the fibonacci sequence are [0, 1, 1, 2, 3, 5, 8] so the 6th number is 8.

---

## Problem 2: The Kaleb Sequence

The Kaleb sequence appears nowhere in nature and exists purely in this question.

The Kaleb sequence begins with *kaleb(0) = 2* and *kaleb(1) = -1* as its first and second terms. After these first two elements, each subsequent element is equal to twice the previous previous term minus the previous term.

Programmatically:

* *kaleb(0) = 2*
* *kaleb(1) = -1*
* *kaleb(n) = 2\*kaleb(n-2) - kaleb(n-1)*

Given *n*, return the *nth* number in the sequence.

---

### Example

Input: 6

Output: 65

TODO

Explanation: The first 6 numbers (starting at index 0) in the kaleb sequence are [2, -1, 5, -7, 17, -31, 65] so the 6th number is 65.

---

## Submission

* Push your code
* Create a Pull Request
