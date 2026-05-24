const a = 10
const b = 5
const c = 15.8

console.log(a * c );
console.log(a-b);
console.log(b-c);
console.log(a / c);
console.log(a % b); // returns remainder
console.log(a ** b); // this is a to the power of b which is 5

// math methods 
console.log(Math.floor(c)); // round to whole number no approximation
console.log(Math.round(c)); // rounds to the nearest whole number, no approximation
console.log(Math.ceil(4.1)); // will round up to 5
console.log(Math.abs(-50)); //removes the minus 
console.log(Math.max(50,100,1000)); // returns the highest
console.log(Math.min(50,100,500)); // returns min value
console.log(Math.random(10)); // generates random numbers

// js have floating point issue 
console.log(0.1 + 0.2); // will print 0.3000000

// to fix it use the tofixed method
console.log((0.1 + 0.2 ).toFixed(2)); // will the return 0.30 rounded 2decimal place but it's a string like this 
console.log(+(0.1 + 0.2).toFixed(2)); // will return it in number

// to convert string to number
const input = "28"
console.log(Number(input));
console.log(parseInt(input)); // as int value 
console.log(parseFloat(input)); //  as decimal number

 let bal = 250000
 const deposit = 75000
 console.log("deposit of NGN" + deposit);
  const newBal = bal + deposit
const withdrawal = 30000
console.log("withdrawal of NGN" + withdrawal);
const finalBal = newBal - withdrawal
const account = `your new account balance after deposit and withdrawal is NGN${finalBal}`
console.log(account);

const random = Math.random()*100
 const floorRandom = Math.floor(random) + 1
 console.log(floorRandom);
 

 const  userInput = "1500.75"
 const converted = parseFloat(Math.floor(userInput)) + 500

 console.log(converted);
 












