import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/counter/actions'


function App() {
  const count = useSelector((state)=> state.value)

  // console.log(count)

  const dispatch = useDispatch()

  return (
    <>

    <h3>{count}</h3>
      
      <div className="card">
        <button onClick={()=> dispatch(increment())}>
          increment
        </button>
        <button onClick={()=>dispatch(decrement())}>
          decrement
        </button>
       </div>
    </>
  )
}

// const mapToState = (state)=>{
//   return {
//     count: state.value
//   }
// }
// const mapToDispatch = (dispatch)=>{
//   return {
//     increment: (value)=> dispatch(increment(value)),
//     decrement: (value)=> dispatch(decrement(value))
//   }
// }

// export default connect(mapToState, mapToDispatch)(App)

export default App
