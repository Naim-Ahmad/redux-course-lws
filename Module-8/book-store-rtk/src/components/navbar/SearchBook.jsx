import { useDispatch } from "react-redux";
import { setSearchText } from "../../redux/features/filter/filterSlice";

export default function SearchBook() {
  const dispatch = useDispatch()

  const handleSearch = e => {
    e.preventDefault()
    const searchText = e.target.search.value;
    dispatch(setSearchText(searchText))
  }

  const handleKeyUp = e => {
    if (e.target.value === '') {
      dispatch(setSearchText(''))
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <div className="group relative rounded-md bg-white">
        <svg width="20" height="20" fill="currentColor"
          className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary">
          <path fillRule="evenodd" clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z">
          </path>
        </svg>
        <input onKeyUp={handleKeyUp} type="text" name="search" placeholder="Filter books..." className="search" id="lws-search" />
      </div>
    </form>
  )
}