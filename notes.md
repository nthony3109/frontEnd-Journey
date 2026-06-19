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

# Day 3 — Objects & Destructuring
 Date: 25/05/2025

## What I Learned
- Objects are key-value pairs in JS — no class needed unlike Java
- Dot notation is cleaner than bracket notation for accessing properties
- Object destructuring unpacks values into variables in one line
- Rename while destructuring using : e.g const { owner: accountName } = account
- Default values in destructuring handle missing properties safely
- this keyword refers to the object that owns the method
- Never use arrow functions for object methods — this breaks
- Spread ... merges objects and updates fields without mutating originals
- Order matters with spread — spread first, override after
- Property shorthand avoids repeating variable names as keys
- Computed properties [] allow dynamic key names — used heavily in React forms

## What Was Confusing
- +- is not valid — use -= for subtraction assignment
- Arrow functions break this inside object methods
- Spread order matters — later keys override earlier ones
- this inside methods should reference object properties not outer variables

## Code I Wrote
- bankAccount object with deposit, withdraw and getSummary methods
- Merged and updated objects using spread without mutating originals
- Dynamic form handler pattern using computed property names

## What's Coming Tomorrow
- Functions — arrow functions, callbacks, higher order functions

# Day 4 — Functions, Callbacks, Higher Order Functions & Closures
Date: 26/05/2025

## What I Learned
- Arrow functions are the modern way to write functions in JS
- Single line arrow functions return automatically — no return keyword needed
- Curly braces in arrow functions require explicit return keyword
- Default parameters handle missing arguments cleanly
- A callback is a function passed into another function as argument
- map, filter, forEach all take callbacks — I've been using them already
- Higher order functions either take or return other functions
- Closures remember variables from parent scope even after parent finishes
- Private variables in JS are achieved through closures — like Java's private keyword
- My useWebSocket hook was already using closures without knowing it!

## What Was Confusing
- const variables can't be reassigned — use let for values that change
- Must return the methods object from a closure function
- Call methods on the stored instance not on the function itself
- else blocks need return keyword to output values

## Code I Wrote
- processTransaction with callbacks for deposit, withdrawal and insufficient funds
- createMultiplier higher order function
- Chain of filter + map + reduce on transactions array
- createWallet closure with private balance and topUp, spend, getBalance methods

## What's Coming Tomorrow
- Async/Await, Promises & Fetch API


# Day 6 — DOM Manipulation & Events
Date: 28/05/2025

## What I Learned
- The DOM is a tree of all HTML elements JavaScript can read and manipulate
- querySelector is the modern way to select elements — works like CSS selectors
- querySelectorAll returns all matches, querySelector returns just the first
- textContent changes text, innerHTML changes HTML inside an element
- classList.add, remove, toggle are cleaner than inline styles
- createElement creates a new element, appendChild/prepend adds it to the page
- container.innerHTML = "" is the fastest way to clear all children
- addEventListener listens for user actions — click, input, submit, mouseenter
- e.preventDefault() stops form from refreshing the page on submit
- mouseenter fires when mouse enters an element, mouseleave when it leaves
- Events added to dynamically created elements must be added right after creation

## What Was Confusing
- container.remove(div) is wrong — use container.innerHTML = "" to clear all
- Hover in CSS works but JS mouseenter/mouseleave gives more control
- Always reset both the counter variable AND the display span on clear

## Code I Wrote
- Notification app with add, counter and clear all features
- Dynamic hover events on each notification card
- Empty list check before clearing

## What's Coming Tomorrow
- Day 7 — Mini Project: Task List App
- Combines everything from Week 1 into one real project

# Day 7 — Mini Project: Task List App
Date: 29/05/2025

## What I Built
A fully functional Task List App using pure JavaScript — no frameworks

## Features
- Add tasks with priority levels — high, medium, low
- Mark tasks as complete with visual feedback
- Delete tasks
- Filter by all, active, completed
- Live task counter
- Press Enter to add tasks
- Event delegation for dynamic elements

## Week 1 Concepts Used
- const & let — state management
- Template literals — dynamic HTML generation
- Arrays & spread — tasks = [task, ...tasks]
- map — toggle complete without mutating state
- filter — delete tasks and filter by status
- Objects & shorthand — createTask function
- Arrow functions — all functions
- Closures — tasks array as private state
- DOM manipulation — renderTasks function
- Events — click, keypress, event delegation

## Biggest Lessons From Week 1
- JS is dynamically typed unlike Java — no int, double, float
- Always use === never ==
- Arrow functions with {} need explicit return
- Spread creates new arrays/objects — never mutate directly
- Async/Await is just cleaner promise syntax
- DOM manipulation is why React was invented — it gets complex fast!

# Day 8 — JSX, Components & Props
 Date: 30/05/2025

## What I Learned
- JSX is HTML written inside JavaScript — React converts it under the hood
- Component names must start with a capital letter
- JSX rules — one parent element, className not class, all tags must close
- {} in JSX renders JavaScript expressions
- Props are how you pass data into components — like function arguments
- Always destructure props — const TnxCard = ({ type, amount }) => {}
- Render lists with map — always include key prop
- () in map returns automatically, {} needs explicit return keyword
- Dynamic Tailwind classes using ternary — border-green-500 vs border-red-500

## What Was Confusing
- map with {} curly braces needs explicit return — same rule as Day 4!
- key prop is required on every list item — React uses it to track changes

## Code I Wrote
- TnxCard component with dynamic border color based on transaction type
- App.jsx rendering a list of TnxCards using map

## What's Coming Tomorrow
- useState & Event Handling — making components interactive

# Day 9 — useState & Event Handling
Date: 31/05/2025

## What I Learned
- Regular variables don't trigger re-renders — useState does
- useState returns [currentValue, setterFunction]
- Never mutate state directly — always use the setter function
- State updates with arrays use spread — setTasks([...tasks, newTask])
- State updates with objects use spread — setUser({ ...user, name: "Tony" })
- Previous state pattern — setCount((prev) => prev + 1)
- Controlled inputs — value tied to state, onChange updates state
- handleChange with computed property [name]: value handles all inputs in one function
- Pass functions as props — onDelete={() => handleDelete(t.id)}
- onClick={handleClick} not onClick={handleClick()} — no () on handler

## What Was Confusing
- Never call the handler directly onClick={handleClick()} — runs on render not click
- State updates are async — use prev pattern when new state depends on old

## Code I Wrote
- Interactive transaction app with add and delete
- Single handleChange function handling all form inputs
- Live balance calculation using reduce
- Delete handler passed as prop to TnxCard

## What's Coming Tomorrow
- useEffect & API calls — fetching real data from backend

# Day 10 — useEffect & API Calls
 Date: 06/06/2025

## What I Learned
- useEffect manages side effects — API calls, WebSocket, timers
- Dependency array controls when effect runs:
  - No array — every render
  - Empty [] — once on mount only
  - [value] — when value changes
- Always define useEffect BEFORE conditional returns — React rule!
- Always handle 3 states for every API call: loading, error, data
- finally block always runs whether success or fail — use for setLoading(false)
- catch(error) — use the caught variable not the state variable
- Cleanup function — return a function from useEffect to run on unmount
- My useWebSocket hook was already using useEffect cleanup correctly!

## What Was Confusing
- Hooks must come before any conditional returns — never after
- setErr(err) uses state variable, setErr(error.message) uses caught error
- State variable name must match what you use in JSX — tnx not tnxList
- Typos in API field names return undefined silently — always check spelling

## Code I Wrote
- Fetched 8 todos from jsonplaceholder API
- Mapped API response to TnxCard format
- Loading spinner while fetching
- Error message if fetch fails
- finally block to always stop loading

## What's Coming Tomorrow
- Component Communication & Lifting State

# Day 12 — React Router
 Date: 07/06/2025

## What I Learned
- React Router enables multi-page apps without full page reloads
- BrowserRouter wraps the entire app in main.jsx
- Routes + Route define which component renders for each path
- Each "page" is just a regular component
- Link and NavLink navigate without reload — never use <a href>
- NavLink className accepts a function with isActive for active styling
- useParams reads dynamic URL segments like /transactions/:id
- useNavigate allows redirecting after actions like login
- App.jsx becomes purely routing logic — pages live in pages/ folder

## What Was Confusing
- <a href> causes full page reload — Link/NavLink don't
- NavLink className takes a function not a string
- Page components are just regular components — nothing special

## Code I Wrote
- Set up BrowserRouter in main.jsx
- Created Dashboard, Transactions, Profile pages
- Built Navbar with NavLink for active styling
- Moved transaction fetching logic into Transactions.jsx
- App.jsx is now clean — just Routes definition

## What's Coming Tomorrow
- Forms & Controlled Components

# Day 13 — Forms & Controlled Components
 Date: 08/06/2025

## What I Learned
- Controlled inputs — React state is the single source of truth
- One handleChange/setValue function handles all fields via computed properties
- Validation runs BEFORE submission inside a validate() function
- Object.keys(errors).length === 0 checks if validation passed
- Always call functions with () — !validate is wrong, !validate() is correct
- Conditional Tailwind classes show red border when a field has an error
- Checkbox uses checked not value
- Radio buttons share the same name to group them
- e.preventDefault() stops the form from reloading the page
- Reset form state after successful submission

## What Was Confusing
- object.Keys vs Object.keys — JavaScript is case sensitive on built-ins
- !validate checks the function reference, !validate() calls it
- setError vs setErr — setter name must match exactly what useState returned
- Double negative logic !form.amount && !form.amount > 0 was backwards — use || instead

## Code I Wrote
- AddTransaction form — description, amount, type, date
- Full validation with error messages per field
- Conditional red border styling on invalid fields
- Form resets after successful submission

## What's Coming Tomorrow
- Day 14 — Week 2 Mini Project: Multi Page App with API