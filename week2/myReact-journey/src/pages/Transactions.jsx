import { useEffect, useState } from "react"
import TnxCard from "../TnxCard"

const Transactions = () => {
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
export default Transactions