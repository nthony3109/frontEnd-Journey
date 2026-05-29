// arrow functions
const greet = (name = "Guest") => `Hello ${name}`

const bal = 200
const  calcbalance = (deposit, withdrawal) => deposit - withdrawal

const formatAmount = (amount, currency = "NGN") => {
    return `${currency}  ${amount.toLocaleString()}`
}

const isHighValue = (balance, threshold = 100000) => balance > threshold

// A callback is simply a function passed into another function as an argument. You've already been using them without knowing — every map, filter and forEach you wrote takes a callback!

const processTransaction = (type, amount, callBack) => {
    console.log(`processing  ${type} of #${amount.toLocaleString()}`);
    callBack(amount)
    
}

const depositSuccess = (amount) => console.log(`desposit of #${amount} is successful`);

const withdrawalSucess = (amount) => console.log(`#${amount} withdrawal sucessful`);

const insufficientFunds = (amount) => console.log(`sorry insufficient acccount balance`);

processTransaction("deposit", 500, depositSuccess)

//higher order fuction
// is function that either accept another function(e.g callBack) as arg or returns a function

const createMultiplier = (multiplier) => {
    return  (n) => n*multiplier
}

const double = createMultiplier(2)
const triple = createMultiplier (3)

console.log(double(1000));
console.log(triple(300));

const transactions = [
  { id: 1, type: "credit", amount: 50000  },
  { id: 2, type: "debit",  amount: 20000  },
  { id: 3, type: "credit", amount: 80000  },
  { id: 4, type: "debit",  amount: 5000   },
  { id: 5, type: "credit", amount: 120000 },
]

const allDebitTnx = transactions.filter ( (tnx) => tnx.type === "debit" )
.map (
    (tnx) => tnx.amount
)
.reduce(
    (total,amount) => total + amount, 0
)

console.log(`total debit amount is ${allDebitTnx}`);


// closure 
// is a variable inside a function

const createWallet = (initiaBal) => {
    let balance = initiaBal
    const topUp = (amount ) => {
        balance += amount
        return `depoit successful NGN${amount}`
    }
    const spend = (amount) =>{
        if (balance > amount) {
                 balance -= amount;    
                 return ` NGN${amount} spent sucessfully`        
        }
        else { return "insufficient fund"}
    }

    const getBal = () => {
        return `your balance is NGN${balance.toLocaleString()}`
    }
    return {topUp, spend , getBal}
}

const wallet = createWallet(500)
console.log(wallet.topUp(500));
console.log(wallet.spend(400));
console.log(wallet.getBal());






