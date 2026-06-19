import { useEffect, useState } from 'react'
import './App.css'
import TnxCard from './TnxCard'
import Navbar from "./Navbar"; 
import Transactions from "./pages/Transactions";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard"
import { Route, Routes } from 'react-router-dom'
import AddTnx from './pages/AddTnx';

function App() {
  const [count, setCount] = useState(0)

  const tnxList = [
    { id: 1, type: "credit", amount: 50000,  description: "Salary",        date: "01/06/2025" },
    { id: 2, type: "debit",  amount: 20000,  description: "Rent",          date: "02/06/2025" },
    { id: 3, type: "credit", amount: 15000,  description: "Freelance",     date: "03/06/2025" },
    { id: 4, type: "debit",  amount: 5000,   description: "Groceries",     date: "04/06/2025" },
 ]


  return (
    <div>
      <Navbar />
       <Routes>
      <Route path='/' element = {<Dashboard />} />
      <Route path='/transactions' element = { <Transactions />} />
      <Route path='/profile' element ={<Profile/>} />
      <Route path='/addTnx' element={<AddTnx />} />
    </Routes>
    </div>
  )
}

export default App
