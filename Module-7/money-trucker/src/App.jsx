import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Balance from "./components/Balance"
import Form from "./components/Form"
import Layout from "./components/Layout"
import Transactions from "./components/Transactions"
import { findTransaction } from "./redux/features/transaction/transactionSlice"


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(findTransaction())
  }, [])

  return (
    <Layout>
      <Balance />
      <Form />
      <Transactions />
    </Layout>
  )
}

export default App
