import { useDispatch } from "react-redux"
import { search } from "../../redux/features/filter/filterSlice"

export default function Search() {
  const dispatch = useDispatch()

  const handleSearch = e => {
    e.preventDefault()
    const searchText = e.target.search.value;
    dispatch(search(searchText))
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
      />
    </form>
  )
}