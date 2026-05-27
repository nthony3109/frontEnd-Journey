//using template literals  it start with back tick
const fname = "DevTony"
const career = "full-Stack"
let backendStack = "java spring boot"

const aboutMe = `i am ${fname}, a ${career}. i use ${backendStack} for backend and React js front_end`
console.log(aboutMe);

// you can also write expressing inside literal
const amount = 200
const  interest = 15.50
const duration = 30

const message =  `the total money ${amount + (interest * duration)} `
console.log(message);

//tenary inside literal 
const isEmployed = false
const expr = `status:  ${isEmployed? "he is employed " : "he is not employed, he need job"}`

console.log(expr);


