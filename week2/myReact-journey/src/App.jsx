import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TnxCard from './TnxCard'

function App() {
  const [count, setCount] = useState(0)

//   const tnxList = [
//     { id: 1, type: "credit", amount: 50000,  description: "Salary",        date: "01/06/2025" },
//     { id: 2, type: "debit",  amount: 20000,  description: "Rent",          date: "02/06/2025" },
//     { id: 3, type: "credit", amount: 15000,  description: "Freelance",     date: "03/06/2025" },
//     { id: 4, type: "debit",  amount: 5000,   description: "Groceries",     date: "04/06/2025" },
//  ]

 const [tnx, setTnx] = useState([])
 const [loading, setLoading] = useState(true)
 const [err, setErr] = useState (null)


    useEffect ( () => {
      const fetchTnx = async () =>{
            try {
               const res = await fetch ("https://jsonplaceholder.typicode.com/todos?_limit=8")
               if (!res.ok) throw new Error(`there is Http error: ${res.status} ${setErr(res.Error)}` )
                const transactions = await res.json()
              setTnx( transactions)
   
            } catch (error) {
              setErr(err.message)
            }
            finally {
              setLoading(false)
            }

      }
      fetchTnx()
       }, [])


 if (loading) return <h1 className="text-center font-bold text-2xl text-pink-500 mt-40">loading...</h1>

 if (err) { 
  return  <h1> there is an error which is:
  <br></br> <small className='text-red-500'> {err} </small>
 </h1>
 }

  return (
    <>
          <h1 className='text-red-800 text-center underline text-3xl m-4'>my React Restart</h1>
          <h2 className=' text-2xl font-bold text-grey-600 mb-6 text-center'>Transactions perfomed</h2>
          {tnx.map((tnx) => {
            return (
                <TnxCard 
                  key={tnx.id}
                  type={tnx.completed?"credit" : "debit"}
                  amount={tnx.id*1000}
                  description={tnx.title}
                  date={"09-06-2026"}
               />
            )
          })}
    </>
  )
}

export default App
