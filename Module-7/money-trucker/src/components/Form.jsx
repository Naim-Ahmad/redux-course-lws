import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction, deActiveEdit, updateTransaction } from "../redux/features/transaction/transactionSlice";

export default function Form() {

  
  const dispatch = useDispatch()
  const {editing} = useSelector(state=> state.transaction)
  const [type, setType] = useState('')

 useEffect(()=>{
  if(editing?.isEditing){
    setType(editing?.type)
  }else{
    setType('')
  }
 }, [editing])

  const handleCreateTransaction = e => {
    e.preventDefault()
    const name = e.target.name.value;
    const type = e.target.type.value;
    const amount = e.target.amount.value;

    const transData = {
      name, 
      type, 
      amount: Number(amount)
    }
    dispatch(createTransaction(transData))
    e.target.reset()
  }

  const handleUpdate  = (e)=>{
    e.preventDefault()
    const name = e.target.name.value;
    const type = e.target.type.value;
    const amount = e.target.amount.value;

    const transData = {
      name, 
      type, 
      amount: Number(amount)
    }
    dispatch(updateTransaction({id: editing.id, data: transData}))
    e.target.reset()
    dispatch(deActiveEdit())
  }

  const handleCancel = () => {
    dispatch(deActiveEdit())
  }

  return (
    <form onSubmit={editing.isEditing ? handleUpdate : handleCreateTransaction} className="form">
      <h3>Add new transaction</h3>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="My Salary"
          defaultValue={editing.name ? editing.name : null}
        />
      </div>

      <div className="form-group radio">
        <label htmlFor="type">Type</label>
        <div className="radio_group">
          <input
            type="radio"
            value="income"
            name="type"
            required
            onChange={()=> setType('income')}
            checked={type === 'income'}
          />
          <label htmlFor="type">Income</label>
        </div>
        <div className="radio_group">
          <input
            type="radio"
            value="expense"
            name="type"
            placeholder="Expense"
            onChange={()=> setType('expense')}
            checked={type === 'expense'}
          />
          <label htmlFor="type">Expense</label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          placeholder="300"
          name="amount"
          defaultValue={editing.amount ? editing.amount : null}
        />
      </div>

     {editing.isEditing ? <button type="submit" className="btn">Update Transaction</button> : <button type="submit" className="btn">Add Transaction</button>}

      <button onClick={handleCancel} className={`btn red ${!editing.isEditing ? "cancel_edit" : ""}`}>Cancel Edit</button>
    </form>
  )
}