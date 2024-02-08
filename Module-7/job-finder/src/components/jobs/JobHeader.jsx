import { useDispatch } from "react-redux";
import { selectDropDown, updateSearchText } from "../../redux/sort/sortSlice";

export default function SortSection() {
  const dispatch = useDispatch()

  const handleSearch = e => {
    // console.log(e.target.value)
    const value = e.target.value;
    if (value.length >= 3) {
      dispatch(updateSearchText(value))
    }else if(value === ''){
      dispatch(updateSearchText(value))
    }
  }

  const handleSelect = e => {
    dispatch(selectDropDown(e.target.value))
  }

  return (
    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
      <h1 className="lws-section-title">All Available Jobs</h1>
      <div className="flex gap-4">
        <div className="search-field group flex-1">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input onKeyUp={handleSearch} type="text" placeholder="Search Job" className="search-input" id="lws-searchJob" />
        </div>
        <select onChange={handleSelect} id="lws-sort" name="sort" autoComplete="sort" className="flex-1">
          <option>Default</option>
          <option>Salary (Low to High)</option>
          <option>Salary (High to Low)</option>
        </select>
      </div>
    </div>
  )
}