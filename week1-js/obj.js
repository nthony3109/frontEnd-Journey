    const town = {
                cname :"lagos",
                cpopulation : 500,
                country : "Nigeria",
                isLarge : false
            }
console.log(town);

//updating the obj 
town.cname= "FCT"
town.isLarge = true
town.capital = "Abuja"

console.log(town);

const user1 = {
    fname : "chibuzor daniel",
    age : 28,
    role : "developer",
    isActive : true,
    balance : 200.00
}

user1.Bank = "Ecobank"
user1.balance = 500.00

console.log(user1.fname);
console.log(user1.balance);
console.log(user1);

//obj destrucuturing is just na like that of array
const {fname, role, age } = user1
console.log(fname);
console.log(age);

// you can still change obj var name while destructuring
const {fname : names, role : field, age: years} = user1
console.log(names);
console.log(field);

// writing nested obj 


const user = {
    fname : "chibuzor daniel",
    age : 28,
    role : "developer",
    isActive : true,
    balance : 200.00,
    address : {
            state : "Enugu",
            ocity : "nsukka",
            houseNo : 110
    }
}

const { frname, address:{ocity,state}} = user
console.log(ocity);
console.log(state);

const account = {
    owner: "Chibuzor",
    balance: 250000,
    bank: "GTBank",
    address: {
        city: "Enugu",
        country: "Nigeria"
    }
}
const {owner : accountName , balance,bank}= account
const {address:{city, country}, type = "savings"} = account

//  using "this" keyword and we are using obj function to demostrate it
const account1 = {
    owner: "Chibuzor",
    balance: 250000,
    bank: "GTBank",
    address: {
        city: "Enugu",
        country: "Nigeria"
    },
 getDetails() {
    return `account owner is ${this.owner} and account balance is ${this.balance}`
 }

}

const bankAccount = {
      aOwner : "t-prime Tech",
      bal : 20000.00,
      bank : "Gtb",

      deposit (amount)  {
        this.bal += amount;
        console.log(this.bal);
        
        return this.bal;
      },
      withraw (amount) {
         this.bal -= amount
         console.log(this.bal);
         return this.bal
      },
      transfer (amount) {
         this.bal -= amount
          console.log(this.bal);
         return this.bal
      },
      getSummary () {
        return "the code for summary goes here"
      }

}
console.log(bankAccount.deposit(500));
console.log(bankAccount.withraw(500));
console.log(bankAccount.getSummary());

// spread with object
//merging 2 obj with spread
const t_prime = {
      brand : "developer and gadgets",

}

const mr_t = {
    brand : "plumbing services"
}
const fullprofile = {...t_prime,...mr_t}
// updating data using spread 
const updateT_prime = {...t_prime, brand: "software serices and sales of Gadget"}
const fullprofile2 = {...t_prime,...mr_t}
console.log(updateT_prime);
console.log(fullprofile2);


const me = {name: "chibuzor", role : "java dev"}
const updateMe = {...me, role : "full stack dev"} 

console.log(me);
console.log(updateMe);


// Computed Property Names

const field1= "balance"
const value = 250000

//  Can't do this — creates key literally named "field"
const acct = { field1: value }
console.log(account)  // { field: 250000 }  wrong key name

// ✅ Wrap in [] to use the variable as the key
const acct1= { [field1]: value }
console.log(account)  // { balance: 250000 } ✅

const aName = "Tony"
const aRole = "full stack dev"
const aBal = 250.00

const chi = {aName, aRole, aBal,
    getInfo () {return `name is ${aName}, role is ${aRole} and balance is ${aBal}`}
}
