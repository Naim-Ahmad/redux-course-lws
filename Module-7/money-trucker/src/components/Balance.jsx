import { useSelector } from "react-redux"
import numberWithCommas from "../utils/numberWithCommas"

export default function Balance() {

  const { transactions } = useSelector(state => state.transaction)

  const calculateBalance = () => {
    const totalBalance = transactions.reduce((acc, trans) => {
      if (trans.type === 'income') {
        return acc + trans.amount
      }else{
        return acc - trans.amount
      }
    }, 0)

    return totalBalance;
  }

  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳ </span>
        <span>{numberWithCommas(calculateBalance())}</span>
      </h3>
    </div>
  )
}