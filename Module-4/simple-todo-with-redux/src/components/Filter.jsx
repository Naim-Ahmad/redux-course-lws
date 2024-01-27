import { useDispatch, useSelector } from "react-redux";
import { color as pushColor, statusChanged } from "../redux/filter/actions";

export default function Filter() {
    const filters = useSelector(state => state.filters)
    const todos = useSelector(state => state.todos)
    const totalTask = todos.filter(todo => !todo.completed).length;
    // console.log(filters)
    const dispatch = useDispatch()

    const handleChange = (status) => {
        dispatch(statusChanged(status))
    }

    const handleColor = color => {
        dispatch(pushColor(color))
    }

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{`${totalTask} ${totalTask > 1 ? 'tasks' : 'task'} left`}</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${filters.status === 'All' && 'font-bold'}`} onClick={() => handleChange('All')}>All</li>
                <li>|</li>
                <li className={`cursor-pointer ${filters.status === 'Incomplete' && 'font-bold'}`} onClick={() => handleChange('Incomplete')}>Incomplete</li>
                <li>|</li>
                <li className={`cursor-pointer ${filters.status === 'Complete' && 'font-bold'}`} onClick={() => handleChange('Complete')}>Complete</li>
                <li></li>
                <li></li>
                <li
                    onClick={() => handleColor('green')}
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${filters.colors.includes('green') && 'bg-green-500'}`}
                ></li>
                <li
                    onClick={() => handleColor('red')}
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${filters.colors.includes('red') && 'bg-red-500'}`}
                ></li>
                <li
                    onClick={() => handleColor('yellow')}
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${filters.colors.includes('yellow') && 'bg-yellow-500'}`}
                ></li>
            </ul>
        </div>
    )
}