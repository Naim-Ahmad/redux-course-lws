import { useDispatch } from 'react-redux'
import tick from '../assets/double-tick.png'
import notes from '../assets/notes.png'
import plus from '../assets/plus.png'
import { clearAllTodo, completeAllTodo } from '../redux/todos/actions'
import addTodoToState from '../redux/todos/thunk/addTodo'

export default function Header() {

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    const todo = e.target.todo.value;
    dispatch(addTodoToState(todo))
  }

  return (
    <>
      <div>
        <form
        onSubmit={handleSubmit}
          className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        >
          <img
            src={notes}
            className="w-6 h-6"
            alt="Add todo"
          />
          <input
            type="text"
            name='todo'
            placeholder="Type your todo"
            className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          />
          <button
            type="submit"
            className={`appearance-none w-8 h-8 bg-no-repeat bg-[url('${plus}')] bg-contain`}
          ></button>
        </form>

        <ul className="flex justify-between my-4 text-xs text-gray-500">
          <li onClick={()=> dispatch(completeAllTodo())} className="flex space-x-1 cursor-pointer">
            <img
              className="w-4 h-4"
              src={tick}
              alt="Complete"
            />
            <span>Complete All Tasks</span>
          </li>
          <li onClick={()=> dispatch(clearAllTodo())} className="cursor-pointer">Clear completed</li>
        </ul>
      </div>
    </>
  )
}