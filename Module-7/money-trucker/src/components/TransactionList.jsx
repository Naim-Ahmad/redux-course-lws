import { useDispatch } from 'react-redux'
import deleteImg from '../assets/images/delete.svg'
import editImg from '../assets/images/edit.svg'
import { activeEdit, removeTransaction } from '../redux/features/transaction/transactionSlice'
import numberWithCommas from '../utils/numberWithCommas'

export default function TransactionList({ transaction }) {
  const dispatch = useDispatch()

  const { id, name, amount, type } = transaction || {}

  const handleEdit = () => {
    dispatch(activeEdit(transaction))
  }

  const handleDelete = ()=>{
    dispatch(removeTransaction(id))
  }

  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {numberWithCommas(amount)}</p>
        <button onClick={handleEdit} className="link">
          <img
            className="icon"
            src={editImg}
          />
        </button>
        <button onClick={handleDelete} className="link">
          <img
            className="icon"
            src={deleteImg}
          />
        </button>
      </div>
    </li>
  )
}