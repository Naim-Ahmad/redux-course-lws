import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTodo, deleteTodo } from './redux/features/todoSlice';

function App() {

  const { todo } = useSelector((state) => state.todo)
  console.log(todo)

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    const todo = e.target.todo.value;
    dispatch(addTodo({ title: todo, completed: false }))

  }

  const handleDone = ()=>{

  }

  const handleDelete  = (task)=>{
    dispatch(deleteTodo(task))

  }

  return (
    <>
      <div>
        <h1>To Do Application By Redux</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="todo" />
          <input type="submit" value="ADD" />
        </form>
        <div>
          <h1>All Todo</h1>
          <div>
            {
              todo.length ?
                todo?.map((task, ind) => (
                  <div key={ind}>
                    <p>{task?.title}</p>
                    <button onClick={handleDone}>Done</button>
                    <button onClick={()=> handleDelete(ind)}>Delete</button>
                  </div>
                )) : <p>No Task Here</p>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
