import { useDispatch, useSelector } from "react-redux"
import { addRemoveTags } from "../../redux/features/filter/filterSlice"

export default function Tag({ tag = {} }) {
  const dispatch = useDispatch()
  const { tags } = useSelector(state => state.filter)

  const styles = `${tags.includes(tag?.title) ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"} px-4 py-1 rounded-full cursor-pointer`

  const handleSelectTab = title => {
    dispatch(addRemoveTags(title))
  }

  return (
    <div
      className={styles}
      onClick={() => handleSelectTab(tag.title)}
    >
      {tag.title}
    </div>
  )
}