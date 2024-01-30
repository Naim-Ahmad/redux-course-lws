import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTags } from '../../redux/features/tags/tagsSlice'
import Tag from './Tag.jsx'

export default function Tags() {

  const dispatch = useDispatch()
  const { tags } = useSelector(state => state.tags)

  // console.log(tags)

  useEffect(() => {
    dispatch(getTags())
  }, [])


  return (
    <section>
      <div
        className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
      >
        {
          tags?.map((tag) => <Tag key={tag.id} tag={tag}/>)
        }
      
      </div>
    </section>
  )
}