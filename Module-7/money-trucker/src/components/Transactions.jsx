import { useSelector } from "react-redux";
import TransactionList from "./TransactionList";

export default function Transactions() {

  const { transactions, isError, isLoading, error } = useSelector(state => state.transaction)

  let content = null;

  if (isLoading) content = <li>Loading...</li>

  if (!isLoading && isError) content = <li>{error.message}</li>

  if (!isLoading && !isError && transactions.length === 0) content = <li>No Transaction</li>

  if (!isLoading && !isError && transactions.length) content = transactions.map(transaction => <TransactionList key={transaction.id} transaction={transaction} />)

  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>
          {content}
        </ul>
      </div>
    </>
  )
}
