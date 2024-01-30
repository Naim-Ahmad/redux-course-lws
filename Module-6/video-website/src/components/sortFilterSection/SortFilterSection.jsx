import { useDispatch, useSelector } from "react-redux"
import { selectAll, selectSaved } from "../../redux/features/filter/filterSlice"
import { changeSelectedValue } from "../../redux/features/sort/sortSlice"

export default function SortFilterSection() {
  const dispatch = useDispatch()
  const {all, saved}= useSelector(state=> state.filter)

  const handleSort = e => {
    dispatch(changeSelectedValue(e.target.value))
  }

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select onChange={handleSort} name="sort" id="lws-sort" className="w-full max-w-[150px] border-2 rounded-md text-gray-500">
            <option value="">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            {/* <!-- handle filter on button click --> */}
            <div>
              <input onChange={(e)=> dispatch(selectAll(e.target.checked))} checked={all} type="radio" name="filter" id="lws-all" className="radio" />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input onChange={(e)=> dispatch(selectSaved(e.target.checked))} checked={saved} type="radio" name="filter" id="lws-saved" className="radio" />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}