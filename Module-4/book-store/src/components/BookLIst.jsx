import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import getBooks from "../redux/books/thunks/getBooks"
import Book from "./Book"

export default function BookLIst() {

  const dispatch = useDispatch()
  const books = useSelector(state => state.books)
  const search = useSelector(state => state.search)
  const [activeTab, setActiveTab] = useState('All')

  useEffect(() => {
    dispatch(getBooks)
  }, [])

  const handleActiveTab = e => {
    setActiveTab(e.target.innerText)
  }

  const filterByActiveTab = (book) => {
    if (activeTab === 'Featured') {
      return book.featured
    } else {
      return book
    }
  }


  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div onClick={handleActiveTab} className="flex items-center space-x-4">
          <button className={`filter-btn ${activeTab === 'All' && "active-filter"}`} id="lws-filterAll">All</button>
          <button className={`filter-btn ${activeTab === 'Featured' && "active-filter"}`} id="lws-filterFeatured">Featured</button>
        </div>
      </div>
      <div className="lws-bookContainer">
        {/* <!-- Card 1 --> */}
        {
          books.filter(book => {
            if (search === '') {
              return true
            } else {
              const matches = book.name.match(new RegExp(search, 'gi'))
              // console.log(matches)
              return matches?.length > 0
            }
          }).filter(filterByActiveTab).map(book => <Book key={book.id} book={book} />)
        }
      </div>
    </div>
  )
}