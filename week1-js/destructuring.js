// Destructuring lets you pull values out of an array into variables in one clean line:

const profile = ["Chibuzor", 28, "Backend Developer", "Enugu", "Nigeria"]

const [fname, age] = profile
console.log(fname + " and " + age);

const [lname, ,role] = profile
console.log(lname + " " + role);

const [first , second, ...details]= profile
console.log(details);


