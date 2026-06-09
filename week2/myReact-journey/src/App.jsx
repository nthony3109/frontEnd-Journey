import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TnxCard from './TnxCard'

function App() {
  const [count, setCount] = useState(0)

  const tnxList = [
    { id: 1, type: "credit", amount: 50000,  description: "Salary",        date: "01/06/2025" },
    { id: 2, type: "debit",  amount: 20000,  description: "Rent",          date: "02/06/2025" },
    { id: 3, type: "credit", amount: 15000,  description: "Freelance",     date: "03/06/2025" },
    { id: 4, type: "debit",  amount: 5000,   description: "Groceries",     date: "04/06/2025" },

]

  return (
    <>
          <h1 className='text-red-800 text-center underline text-3xl m-4'>my React Restart</h1>
          <h2 className=' text-2xl font-bold text-grey-600 mb-6 text-center'>Transactions perfomed</h2>
          {tnxList.map((tnx) => {
            return (
                <TnxCard 
                  key={tnx.id}
                  type={tnx.type}
                  amount={tnx.amount}
                  description={tnx.description}
                  date={tnx.date}
               />
            )
          })}
    </>
  )
}

export default App
