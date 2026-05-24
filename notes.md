# Day 1 — Variables, Data Types, Strings & Numbers
Date: 23/05/2025

## What I Learned
- `const` for values that never change, `let` for values that change, `var` is dead
- JavaScript has 6 primitive types: String, Number, Boolean, Null, Undefined, Symbol
- Template literals with backticks and `${}` replace string concatenation
- JavaScript has only one number type unlike Java's int, double, float
- `Math.random()`, `Math.floor()`, `Math.ceil()`, `toFixed()` for number operations
- `parseInt()` cuts decimals, `parseFloat()` keeps them — important for form inputs

## What Was Confusing
- `Math.random()` doesn't take arguments — range must be calculated manually
- `includes()` is case sensitive
- `match()` is for regex, not replacement

## Code I Wrote
- Declared variables using const and let for a user profile
- Built a bank account with deposit and withdrawal using template literals
- Cleaned email strings using `.trim()` and `.toLowerCase()`
- Converted form string input to numbers using parseFloat

## What's Coming Tomorrow
- Arrays — map, filter, reduce, spread operator

# Day 2 — Arrays
Date: 24/05/2025

## What I Learned
- Arrays are flexible in JS — no fixed size or type like Java
- push/pop adds and removes from end, unshift/shift from beginning
- map transforms every item and returns a new array
- filter returns only items that match a condition
- reduce combines all items into a single value
- spread ... combines arrays without mutating originals
- Array destructuring unpacks values into variables cleanly
- useState in React is just array destructuring under the hood

## What Was Confusing
- single = is assignment, === is comparison inside filter
- curly braces in arrow functions require explicit return keyword
- acct.active not accounts.active inside callbacks

## What's Coming Tomorrow
- Objects & Object Destructuring