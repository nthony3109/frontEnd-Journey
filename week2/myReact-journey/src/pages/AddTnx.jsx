import { useState } from "react"

const AddTnx = () => {

    const [form, setForm] = useState ({
        description : "" ,
        amount : 0,
        type : "",
        date: "",
        
    })

    const setValue = (e) => {
        const {name, value} = e.target
        setForm({... form, [name] : value })
    }
    
    const [err, setErr] = useState({})
    const validate = () => {
        const newErr = {}
        console.log("inside error check block");
        
        if (!form.description.trim()) newErr.description = "description is required"
        if (!form.amount || form.amount <=0 ) newErr.amount = "amount is required and must be more than 0"
        if(!form.type) newErr.type =  " type of transaction is required"
        if (!form.date) newErr.date =  " date is  required"

        setErr(newErr)
        return Object.keys(newErr).length == 0
    }

    const  handleSubmit = (e) => {
        e.preventDefault()
        if (!validate()) return

        console.log(form)
            setForm({ description: "", amount: 0, type: "", date: "" })  
    }
    return (
        <>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4"> New Transaction</h2>
            <input name="description" type="text" value={form.description}
                onChange={setValue} placeholder="enter description" className={ `w-full border rounded p-2 mt-2 ${err.description ? "border-red-500" : ""} `}
            />
            {err.description && (
                <p className="text-red-500 text-sm mt-0">{err.description}</p>
            )}
            <input type="number" name="amount" value={form.amount} onChange={setValue} className={ `w-full border rounded p-2 mt-4 ${err.amount ? "border-red-500" : ""} `}
            />
                {err.amount && (
                <p className="text-red-500 text-sm mt-1">{err.amount}</p>
            )}
            <input type="date" name="date" value={form.date} onChange={setValue} className={ `w-full border rounded p-2 mt-4 ${err.date ? "border-red-500" : ""} `}
            />
          {err.date && (
                <p className="text-red-500 text-sm mt-1">{err.date}</p>
            )}
            <select name="type" value={form.type} onChange={setValue} className={ `w-full border rounded p-2 mt-4 ${err.type ? "border-red-500" : ""} `}
            >
                <option value="" >select transaction type</option>
                <option value="credit" >Credit</option>
                <option value="debit">Debit</option>
            </select>
                        {err.type && (
                <p className="text-red-500 text-sm mt-0">{err.type}</p>
            )}

            <button type="submit" className="w-full bg-gray-900 text-white py-2 rounded mt-6">Transact</button>
        </form>

        // working fine 
        </>
    )
}
export default AddTnx