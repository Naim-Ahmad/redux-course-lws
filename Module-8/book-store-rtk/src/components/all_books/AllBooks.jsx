import { useSelector } from "react-redux";
import { useGetBooksQuery } from "../../redux/features/api/apiSlice";
import Error from "../ui/Error";
import BookCard from "./BookCard";

export default function AllBooks() {

  const { isLoading, isError, data: books, error } = useGetBooksQuery()
  const { featured, searchText } = useSelector(state => state.filter)

  console.log(featured, searchText)

  const searchFilter = (book) => {
    if (searchText === '') {
      return true
    } else {
      return book.name.search(new RegExp(searchText, 'gi')) !== -1
    }
  }

  const featuredFilter = (book)=>{
    if(!featured){
      return true;
    }else{
      return book.featured
    }
  }

  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>
  }

  if (!isLoading && isError) {
    content = <Error message={error.message} />
  }

  if (!isLoading && !isError && books.length === 0) {
    content = <div>No Books here</div>
  }

  if (!isLoading && !isError && books.length > 0) {
    content = books.filter(searchFilter).filter(featuredFilter).map(book => <BookCard key={book.id} book={book} />)
  }

  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  )
}