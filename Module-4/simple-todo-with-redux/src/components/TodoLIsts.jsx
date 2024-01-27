import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getTodo from "../redux/todos/thunk/getTodo";
import Todo from "./Todo";

export default function TodoLIsts() {

  const todos = useSelector(state => state.todos)
  const filters = useSelector(state => state.filters)
  const dispatch = useDispatch()
  // console.log(filters)
  const filterByStatus = (todo) => {
    switch (filters.status) {
      case 'Complete':
        return todo.completed

      case 'Incomplete':
        return !todo.completed

      default:
        return true
    }
  }

  const filterByColor = (todo)=>{
    // console.log(todo.color)
    if(filters.colors.length){
      return filters.colors.includes(todo?.color)
    }
    return todo;
    
  }

  useEffect(()=> {
    dispatch(getTodo)
  }, [])

  return (
    <div
      className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
    >
      {
        todos
          .filter(filterByStatus)
          .filter(filterByColor)
          .map(todo => <Todo key={todo.id} todo={todo} />)
      }

    </div>
  )
}