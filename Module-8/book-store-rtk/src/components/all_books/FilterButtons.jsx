import { useDispatch, useSelector } from "react-redux"
import { featuredNull, featuredTrue } from "../../redux/features/filter/filterSlice"

export default function FilterButtons() {

  const dispatch = useDispatch()
  const {featured} = useSelector(state=> state.filter)
  const handleFeatured = ()=>{
    dispatch(featuredTrue())
  }

  const handleAll = ()=>{
    dispatch(featuredNull())
  }

  return (
    <div className="flex items-center space-x-4">
      <button onClick={handleAll} className={`lws-filter-btn ${!featured && "active-filter"}`}>All</button>
      <button onClick={handleFeatured} className={`lws-filter-btn ${featured && "active-filter"}`}>Featured</button>
    </div>
  )
}