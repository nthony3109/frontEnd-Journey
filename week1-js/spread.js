const week1Topics = ["Variables", "DataTypes", "Strings"]
const week2Topics = ["JSX", "useState", "useEffect"]

const allTopics = [...week1Topics, ...week2Topics]
console.log(allTopics);

const updatedWeek1= ["array", ...week1Topics]

const copy =[...week2Topics]

console.log(updatedWeek1);
console.log(copy);
//note 
const updatedW_k1 = [...week1Topics, "Arrays"]  // Arrays comes after
// vs
const updatedWk1 = ["Arrays", ...week1Topics]  // works but Arrays appears first


