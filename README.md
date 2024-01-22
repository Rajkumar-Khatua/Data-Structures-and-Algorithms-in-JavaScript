<!-- This is frontend needed data structures and algorithms -->

# Data Structures and Algorithms in JavaScript <!-- omit in toc -->

## Table of Contents <!-- omit in toc -->

- [Data Structures](#data-structures)
  - [Linked List](#linked-list)
  - [Stack](#stack)
  - [Queue](#queue)
  - [Hash Table](#hash-table)
  - [Tree](#tree)
  - [Heap](#heap)
  - [Graph](#graph)
- [Algorithms](#algorithms) -[Time a Complexity](#time-a-complexity)

## Data Structures

## Algorithms

### Time a Complexity

- Constant Time: O(1) - no matter how many elements we're working with, the algorithm/operation will always take the same amount of time.
- Logarithmic Time: O(log(n)) - doubling the number of elements you are iterating over does not double the amount of work. Always assume that searching operations are log(n)
- Linear Time: O(n) - iterating through all elements in a collection of data. If you see a for loop spanning from '0' to 'array.length', you probably have 'n' or linear runtime
- Quasilinear Time: O(n \* log(n)) - you have a loop that iterates over a collection of data and within that loop you are iterating over the same collection of data in its entirety
- Quadratic Time: O(n^2) - every element in a collection needs to be compared to every other element. The 'handshake' algorithm is an example of this
- Exponential Time: O(2^n) - if you add a _single_ element to a collection, the processing power required doubles
- Factorial Time: O(n!) - adding a _single_ element to a collection, the processing power required is multiplied by the number of elements in the collection
