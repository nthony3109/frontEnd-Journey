const cities = ["enugu", "Abuja", "lagos", "PH"]

const length = cities.length
cities.forEach(
    (n) => {
        console.log("this is the city of " + n );
        
    } 
)
cities.pop() // to remove the last element in the array 
cities.unshift("Nsukka") // to add element to the start of the array

console.log("first city " +cities[0] && "last in the list is " + cities[3]);

//with template literal instead and best to use sha
console.log(`first city: ${cities[0]} and last city: ${cities[cities.length - 1]}`)

cities.push("umuahia") // to add element to end of the array

cities.shift() // to remove the first element in the array

cities.forEach(
    (n) => console.log(n )
)

console.log("the length of the final array is " + cities.length);

// array manipulation
const students = [ "chibuzor", "tony", "John", "mary"]
const caps =  students.map(
    (student) => `student: ${student.toUpperCase()}`
)

console.log(caps);

// filter
const accounts = [
  { name: "Chibuzor", balance: 250000, active: true  },
  { name: "Tony",     balance: 5000,   active: false },
  { name: "Mary",     balance: 180000, active: true  },
  { name: "John",     balance: 800,    active: false },
]

// to get only active account 
const activeAcct = accounts.filter (
    (t) => t.active === true
)

console.log("the active accounts are below:");
console.log(activeAcct);

// to get account above 10k
const  above10k = accounts.filter (
    (t) => t.balance > 10000
    
)

console.log("Accounts above 1k are as follows: ");
console.log(above10k);


// reduce 
const reducedAcct = accounts.filter(
    (acct) => acct.active === true
)
.reduce(
    (total,acct) => {
        return total + acct.balance
    },0
)

console.log(reducedAcct)

const total = accounts.reduce(
    (holder, acct) => holder + acct.balance
    ,0
)
console.log(`total amount is NGN${total}`);

